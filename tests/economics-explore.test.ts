import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const html = fs.readFileSync("public/labs/economics/index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)![1];
const questions = JSON.parse(script.match(/const QUESTIONS=(.*?),WRITING=/)![1]);
const keyed = Object.fromEntries(questions.map((q: {id:string;answer:unknown}) => [q.id,q.answer]));

test("Explore's 40 numeric answers reconcile with costs, constraints and cash timing", () => {
  const fixed=12000+6000+2000, sponsor=8000, opening=5000;
  const expected: Record<string, number>={};
  for(const [p,d] of [[400,160],[500,130],[600,100]]) {
    const n=Math.min(d,140), revenue=p*n, variable=n*180, total=fixed+variable;
    Object.assign(expected,{[p+'-attendance']:n,[p+'-revenue']:revenue,[p+'-variable']:variable,[p+'-total']:total,[p+'-surplus']:revenue+sponsor-total});
  }
  Object.assign(expected,{contribution:500-180,'break-sponsored':Math.ceil((fixed-sponsor)/(500-180)),'break-alone':Math.ceil(fixed/(500-180)),unserved:160-140});
  function schedule(n:number,unit:number,defer=0,fee=0){
    const revenue=n*500,variable=n*unit,total=fixed+variable+fee;
    const booking=opening-6000-2000,deposit=revenue*.4,payment=6000+6000+variable-defer;
    const pre=booking+deposit-payment,remaining=revenue*.6,event=pre+remaining-defer-fee,after=event+sponsor;
    const loan=-Math.min(0,booking,pre,event,after);
    assert.equal(after,opening+revenue+sponsor-total);
    return {variable,total,booking,deposit,payment,pre,remaining,event,after,loan,surplus:revenue+sponsor-total};
  }
  const b=schedule(130,180),s=schedule(120,220),o=schedule(120,220,3000,300);
  Object.assign(expected,{'cash-booking':b.booking,'cash-deposit':b.deposit,'cash-payment':b.payment,'cash-pre':b.pre,'cash-finaltickets':b.remaining,'cash-event':b.event,'cash-after':b.after,'cash-loan':b.loan,'cash-repaid':b.after,'stress-variable':s.variable,'stress-total':s.total,'stress-surplus':s.surplus,'stress-deposit':s.deposit,'stress-pay':s.payment,'stress-balance':s.pre,'stress-loan':s.loan,'offer-pay':o.payment,'offer-loan':o.loan,'offer-eventpay':3300,'offer-surplus':o.surplus,'offer-closing':o.after});
  assert.equal(Object.keys(expected).length,40);
  for(const [id,value] of Object.entries(expected)) assert.equal(keyed[id],value,id);
  assert.deepEqual([400,500,600].filter(p=>expected[p+'-attendance']>=120&&expected[p+'-surplus']>=20000),[500]);
  assert(b.loan<=15000&&s.loan>15000&&o.loan<=15000);
});

test("The public workbook has complete inputs, valid scripts and no mentor or Guided assets", () => {
  assert.equal(questions.length,48);
  assert.equal(new Set(questions.map((q:{id:string})=>q.id)).size,48);
  for(const q of questions) assert(html.includes('id="'+q.id+'"'));
  assert.doesNotThrow(()=>new vm.Script(script));
  assert.deepEqual(fs.readdirSync('public/labs/economics'),['index.html']);
  assert(!/Yukt|Yuk Khetan|mentor\.html|guided\.html|Written-work rubric/.test(html));
  assert(!/fetch\(|XMLHttpRequest|sendBeacon|https?:\/\/.*<script/.test(script));
  assert(html.includes('left:87.5%'));
  assert(html.includes('Review your recommendation'));
  assert(html.includes('not submitted to Edussentials'));
});

test("Numeric checking accepts rupee formatting and rejects invalid or blank numbers", () => {
  const parser=script.match(/function parse\(v\)\{[\s\S]*?return Number\(s\);\}/)![0];
  const context=vm.createContext({});vm.runInContext(parser,context);
  for(const [input,expected] of [['₹26,300',26300],['−12400',-12400],['140.00',140],['',null]]) assert.equal(context.parse(input),expected);
  for(const input of ['Infinity','12abc']) assert(Number.isNaN(context.parse(input)));
});
