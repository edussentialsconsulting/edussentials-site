'use client';

import { useState } from 'react';
import styles from './form.module.css';

const QBANK = {
  academic: [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics',
    'Business Studies or Commerce', 'Accounts', 'English and Writing',
    'History and Political Science', 'Psychology', 'Computer Science',
    'Design or Art', 'Second language', 'Research-based work',
    'Project-based assignments', 'Presentations', 'Group work', 'Independent study',
  ],
  interests: [
    'Solving numerical problems',
    'Understanding how machines or systems work',
    "Understanding people's behaviour",
    'Helping people directly',
    'Debating and arguing logically',
    'Starting a business',
    'Managing money or investments',
    'Designing products, graphics, or visuals',
    'Writing, storytelling, or content creation',
    'Coding or building digital tools',
    'Working with biology or life sciences',
    'Analysing politics, society, or law',
    'Performing, speaking, or presenting',
    'Researching deeply into one topic',
    'Organising events or leading teams',
    'Working with data',
    'Building things practically with your hands',
    'Studying brands, marketing, or consumer behaviour',
    'Working in healthcare',
    'Working in sustainability or climate',
    'Working in sports, fitness, or performance',
  ],
  workingStyle: [
    'I take the lead in group projects',
    'I prefer working alone rather than in teams',
    'I enjoy convincing or persuading people',
    'I plan tasks early and work steadily',
    'I work best close to deadlines',
    'I lose consistency on long projects',
    'I overthink and delay starting tasks',
    'I thrive when there is competition',
    'I enjoy explaining things to others',
    'I enjoy organising chaos into structure',
  ],
  preferences: [
    'I prefer people-facing work over independent work',
    'I prefer structured tasks over flexible ones',
    'I prefer creative work over analytical work',
    'I prefer high-risk high-reward roles over stable ones',
    'I prefer field or on-site work over office work',
    'I want to specialise deeply in one area',
    'I want to study abroad',
    'I want strong work-life balance',
    'I want to build my own business one day',
    'I want a high income early in my career',
  ],
  activities: [
    'Internships', 'Model UN', 'Olympiads', 'Debates', 'Sports',
    'Music', 'Art', 'Coding competitions', 'Business competitions',
    'Research projects', 'Writing competitions', 'Science fairs',
    'Volunteering', 'Building or selling something independently',
  ],
  careerAware: [
    'Law', 'Psychology', 'Engineering', 'Finance', 'Design', 'Healthcare', 'Business or founding a company',
  ],
  grade: {
    '9': [
      'I feel pressure to choose a stream early',
      'My current interests are influenced more by family or friends than by me',
      'I want to explore multiple fields before deciding',
      'I am curious about subjects I have not yet studied',
    ],
    '10': [
      'I am confident about my Grade 11 subject choices',
      'I am afraid of dropping a subject I might need later',
      'I am choosing subjects mainly based on marks rather than interest',
      'I am choosing subjects based on family expectations',
      'I have a backup plan if my chosen subjects become too hard',
    ],
    '11': [
      'I am happy with my current subject choices',
      'My current subjects are aligned with my likely career direction',
      'I need help with profile building activities',
      'I need clarity on career options before anything else',
      'I am preparing for an entrance exam alongside school',
    ],
    '12': [
      'I have a clear college list',
      'I have a backup plan in case primary applications do not work out',
      'I need help with essays and applications',
      'I need help with interview preparation',
      'I am applying both to India and abroad',
    ],
  } as Record<string, string[]>,
};

const SECTIONS = [
  { id: 'basics', title: 'About You', sub: 'A few details before we begin.' },
  { id: 'academic', title: 'Academic Comfort', sub: 'Rate how comfortable you feel with each. 1 means very difficult, 5 means very comfortable.' },
  { id: 'interests', title: 'Your Interests', sub: 'Rate how interested you are in each. 1 means very low interest, 5 means very high interest.' },
  { id: 'workingStyle', title: 'How You Work', sub: 'Rate how strongly each statement describes you. 1 means not at all, 5 means very much.' },
  { id: 'preferences', title: 'What You Want', sub: 'Rate how strongly you agree with each. 1 means strongly disagree, 5 means strongly agree.' },
  { id: 'exposure', title: 'What You Have Done', sub: 'Select activities you have participated in.' },
  { id: 'careerAware', title: 'Career Awareness', sub: 'For each field, rate how much you know. 1 means only the name, 5 means hands-on experience.' },
  { id: 'gradeSpecific', title: 'Your Grade', sub: 'A few statements specific to where you are right now.' },
];

type RatingKey = 'academic' | 'interests' | 'workingStyle' | 'preferences' | 'careerAware' | 'gradeSpecific';

type FormState = {
  name: string;
  grade: string;
  school: string;
  board: string;
  subjects: string;
  studentEmail: string;
  parentEmail: string;
  parentPhone: string;
  entrance: string;
  academic: number[];
  interests: number[];
  workingStyle: number[];
  preferences: number[];
  activities: string[];
  meaningful: string;
  careerAware: number[];
  gradeSpecific: number[];
};

const initialState = (): FormState => ({
  name: '', grade: '', school: '', board: '', subjects: '',
  studentEmail: '', parentEmail: '', parentPhone: '', entrance: '',
  academic: Array(QBANK.academic.length).fill(0),
  interests: Array(QBANK.interests.length).fill(0),
  workingStyle: Array(QBANK.workingStyle.length).fill(0),
  preferences: Array(QBANK.preferences.length).fill(0),
  activities: [],
  meaningful: '',
  careerAware: Array(QBANK.careerAware.length).fill(0),
  gradeSpecific: [],
});

function Likert({
  items, values, onChange, scaleLeft, scaleRight,
}: {
  items: string[];
  values: number[];
  onChange: (idx: number, val: number) => void;
  scaleLeft: string;
  scaleRight: string;
}) {
  return (
    <div>
      <div className={styles.scaleHint}>
        <span>1 = {scaleLeft}</span>
        <span>5 = {scaleRight}</span>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className={styles.ratingRow}>
          <div className={styles.ratingQ}>{item}</div>
          <div className={styles.ratingOptions}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onChange(idx, n)}
                className={`${styles.ratingBtn} ${values[idx] === n ? styles.selected : ''}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CareerExplorerForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setData((d) => {
      const next = { ...d, [k]: v };
      if (k === 'grade' && typeof v === 'string' && QBANK.grade[v]) {
        next.gradeSpecific = Array(QBANK.grade[v].length).fill(0);
      }
      return next;
    });
  };

  const updateRating = (field: RatingKey) => (idx: number, val: number) => {
    setData((d) => {
      const arr = [...d[field]];
      arr[idx] = val;
      return { ...d, [field]: arr };
    });
  };

  const toggleActivity = (a: string) => {
    setData((d) => ({
      ...d,
      activities: d.activities.includes(a)
        ? d.activities.filter((x) => x !== a)
        : [...d.activities, a],
    }));
  };

  const canAdvance = () => {
    if (step === 0) {
      return data.name.trim() && data.grade && data.school.trim() && data.studentEmail.trim();
    }
    return true;
  };

  const buildPayload = () => {
    const p: Record<string, string | number> = {
      _subject: `New Career Explorer submission · ${data.name} · Grade ${data.grade}`,
      Name: data.name,
      Grade: data.grade,
      School: data.school,
      Board: data.board,
      'Current Subjects': data.subjects,
      'Student Email': data.studentEmail,
      'Parent Email': data.parentEmail,
      'Parent Phone': data.parentPhone,
      'Entrance Exam Prep': data.entrance,
      'Submitted At': new Date().toISOString(),
    };
    QBANK.academic.forEach((it, i) => { p[`Academic · ${it}`] = data.academic[i] || ''; });
    QBANK.interests.forEach((it, i) => { p[`Interest · ${it}`] = data.interests[i] || ''; });
    QBANK.workingStyle.forEach((it, i) => { p[`Working Style · ${it}`] = data.workingStyle[i] || ''; });
    QBANK.preferences.forEach((it, i) => { p[`Preference · ${it}`] = data.preferences[i] || ''; });
    p.Activities = data.activities.join(', ');
    p['Most Meaningful Activity'] = data.meaningful;
    QBANK.careerAware.forEach((it, i) => { p[`Career Awareness · ${it}`] = data.careerAware[i] || ''; });
    const gq = QBANK.grade[data.grade] || [];
    gq.forEach((it, i) => { p[`Grade ${data.grade} · ${it}`] = data.gradeSpecific[i] || ''; });
    return p;
  };

  const submit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) {
        throw new Error('The form is not yet configured. Please contact Edussentials.');
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildPayload()),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Submission failed (status ${res.status}). ${text ? text.slice(0, 200) : 'Please try again or contact Edussentials.'}`);
      }
      setSubmitting(false);
      setDone(true);
    } catch (e: any) {
      console.error('Submit error:', e);
      setSubmitting(false);
      setSubmitError(e?.message || 'Something went wrong. Please check your internet and try again.');
    }
  };

  if (done) {
    const firstName = data.name.split(' ')[0] || 'there';
    const emails = data.studentEmail + (data.parentEmail ? ` and ${data.parentEmail}` : '');
    return (
      <main className={styles.page}>
        <div className={styles.thanksCard}>
          <h1 className={styles.thanksH}>Thank you, {firstName}.</h1>
          <p className={styles.thanksP}>Your responses have been received. Edussentials will review your assessment and share your personalised report within the next few working days.</p>
          <p className={styles.thanksP}>Keep an eye on your email at {emails}.</p>
          <div className={styles.thanksMeta}>If you have any questions in the meantime, reach out to your counsellor directly.</div>
        </div>
      </main>
    );
  }

  const section = SECTIONS[step];
  const isLast = step === SECTIONS.length - 1;

  return (
    <main className={styles.page}>
      <header className={styles.localHeader}>
        <div className={styles.brandName}>Career Explorer Assessment</div>
        <div className={styles.brandTag}>For students in Grades 9 to 12</div>
      </header>

      <div className={styles.formCard}>
        <div className={styles.progress}>
          <div className={styles.progressText}>Step {step + 1} of {SECTIONS.length}</div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${((step + 1) / SECTIONS.length) * 100}%` }} />
          </div>
        </div>

        <h2 className={styles.sectionTitle}>{section.title}</h2>
        <p className={styles.sectionSub}>{section.sub}</p>

        <div className={styles.sectionBody}>
          {step === 0 && (
            <div className={styles.basicsGrid}>
              <div className={styles.field}>
                <label>Full name *</label>
                <input type="text" value={data.name} onChange={(e) => update('name', e.target.value)} placeholder="As it appears on your school records" />
              </div>
              <div className={styles.field}>
                <label>Grade *</label>
                <select value={data.grade} onChange={(e) => update('grade', e.target.value)}>
                  <option value="">Select grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>School *</label>
                <input type="text" value={data.school} onChange={(e) => update('school', e.target.value)} placeholder="School name" />
              </div>
              <div className={styles.field}>
                <label>Board</label>
                <select value={data.board} onChange={(e) => update('board', e.target.value)}>
                  <option value="">Select board</option>
                  {['CBSE', 'ICSE/ISC', 'IGCSE', 'IB', 'State Board', 'Other'].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className={`${styles.field} ${styles.full}`}>
                <label>Current subjects</label>
                <input type="text" value={data.subjects} onChange={(e) => update('subjects', e.target.value)} placeholder="e.g. Maths, Physics, Chemistry, English, Computer Science" />
              </div>
              <div className={styles.field}>
                <label>Your email *</label>
                <input type="email" value={data.studentEmail} onChange={(e) => update('studentEmail', e.target.value)} placeholder="you@example.com" />
              </div>
              <div className={styles.field}>
                <label>Parent email</label>
                <input type="email" value={data.parentEmail} onChange={(e) => update('parentEmail', e.target.value)} placeholder="parent@example.com" />
              </div>
              <div className={styles.field}>
                <label>Parent phone</label>
                <input type="text" value={data.parentPhone} onChange={(e) => update('parentPhone', e.target.value)} placeholder="+91" />
              </div>
              <div className={styles.field}>
                <label>Entrance exam prep (if any)</label>
                <input type="text" value={data.entrance} onChange={(e) => update('entrance', e.target.value)} placeholder="JEE, NEET, SAT, CLAT, none, etc." />
              </div>
            </div>
          )}

          {step === 1 && <Likert items={QBANK.academic} values={data.academic} onChange={updateRating('academic')} scaleLeft="Very difficult" scaleRight="Very comfortable" />}
          {step === 2 && <Likert items={QBANK.interests} values={data.interests} onChange={updateRating('interests')} scaleLeft="Very low interest" scaleRight="Very high interest" />}
          {step === 3 && <Likert items={QBANK.workingStyle} values={data.workingStyle} onChange={updateRating('workingStyle')} scaleLeft="Not at all like me" scaleRight="Very much like me" />}
          {step === 4 && <Likert items={QBANK.preferences} values={data.preferences} onChange={updateRating('preferences')} scaleLeft="Strongly disagree" scaleRight="Strongly agree" />}

          {step === 5 && (
            <>
              <div className={styles.checkboxGrid}>
                {QBANK.activities.map((a) => (
                  <label key={a} className={`${styles.chkPill} ${data.activities.includes(a) ? styles.on : ''}`}>
                    <input type="checkbox" checked={data.activities.includes(a)} onChange={() => toggleActivity(a)} />
                    <span>{a}</span>
                  </label>
                ))}
              </div>
              <div className={`${styles.field} ${styles.full}`} style={{ marginTop: 24 }}>
                <label>Which activity felt most meaningful to you, and why?</label>
                <textarea rows={4} value={data.meaningful} onChange={(e) => update('meaningful', e.target.value)} placeholder="A few sentences is enough." />
              </div>
            </>
          )}

          {step === 6 && <Likert items={QBANK.careerAware} values={data.careerAware} onChange={updateRating('careerAware')} scaleLeft="Only know the name" scaleRight="Hands-on experience" />}

          {step === 7 && data.grade && QBANK.grade[data.grade] && (
            <Likert items={QBANK.grade[data.grade]} values={data.gradeSpecific} onChange={updateRating('gradeSpecific')} scaleLeft="Strongly disagree" scaleRight="Strongly agree" />
          )}
          {step === 7 && !data.grade && (
            <p className={styles.warn}>Please go back to the first section and select your grade.</p>
          )}
        </div>

        {submitError && (
          <div className={styles.errorBanner}>
            {submitError}
            <button type="button" className={styles.retryBtn} onClick={submit}>Try again</button>
          </div>
        )}

        <div className={styles.navRow}>
          {step > 0 ? (
            <button type="button" className={styles.btnSecondary} onClick={() => { setSubmitError(null); setStep(step - 1); }} disabled={submitting}>
              Back
            </button>
          ) : <span />}
          {!isLast ? (
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={() => {
                if (canAdvance()) setStep(step + 1);
                else alert('Please fill in name, grade, school, and your email before continuing.');
              }}
            >
              Next
            </button>
          ) : (
            <button type="button" className={styles.btnPrimary} onClick={submit} disabled={submitting}>
              {submitting ? <><span className={styles.spinner} />Submitting…</> : 'Submit'}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
