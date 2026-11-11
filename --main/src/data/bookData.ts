import { DocumentaryRecord, MediaArticle, QuoteItem, ReviewItem, TimelineEvent } from '../types';

export const BOOK_IMAGES = {
  bookCoverPhoto:
    'https://res.cloudinary.com/ddcrshx6o/image/upload/v1792505415/dd6730d8-a146-4b5c-a0bf-1a5e285e3ace.png',
  bookCoverTexture:
    'https://res.cloudinary.com/ddcrshx6o/image/upload/v1792505415/dd6730d8-a146-4b5c-a0bf-1a5e285e3ace.png',
  accidentSceneHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDSZCpJpOua7sXUY_pBdZXTXEGrAmBRI7q6QdDS2iZh1jvC9_Qyb7Ri4dMRyfBiRaF7YZ_ZA6mr624pmIzPgKR6LsibbdUCIksO-RnzIH_GCWs-cqczXRiyUcSqia9smn3hvZ4GUBPgFi3n8rsMD77Rnq-sHyAQmZyNsL8QZN_R9SqV4mEBP5f5CX-ZtbkuIHSIOkdzsR5MCnG2hk-rQ_fnjGHaCGY0k5loZISAVXK9VdXUwSpz_y-P',
  stage1Trauma:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAhLg_SkT5qbFrFpJI15n5UhQq5QYXhTbyiAjvAXOSlvjio3uB6MFxQKmPjeGapK0uSGznip2_49HFycm_RKq0g-JCVIMD1eqvPUlwRxcdFb7ng2klb--_mblldGgktOCLSMKQTdQkNlU7Mtkp48SWUwXkyT3v6sVBI37Nij000jaPWdcuDhqqb_T0Q56mSwtA41_Bc-Yc_KfFk2MkeCWbIHOM-o7tZN1CHVWDpigRQPDULBPjKQow4',
  stage2Consultation:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381715/a455760a-a308-4414-a295-d837fdbf7062.png',
  stage2Hands:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBAFYvG1FWtqziZ9i4RxO2UTWVD6mYWu67-I9W7bf8Zi7KH8yEQ9JmhwkA7fQ5IXqaBCSvu2_gG3ip1Je3rROkyZjMXzMciFXvfpAtJWlgdm_A1hFI7iKTWkaE8j9hD967Z8nJuZsJ5AqPo6KRNklA4BePVg_ucaCugF650eEnaPOX6P13Qp0JDgUIqleMldoRNLbszZVs81YMm_IF1Ft80w44X843iCxSSw2VTrnOOEI8N4TeH26ds',
  stage3Faith:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381731/6d15e91a-7533-4889-aff8-0a9520382dda.png',
  stage3GlobalMap:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB9_umIz5wZh72dla3GLvyOkAqOFWfmQB-r7RyeEjuke5BY0g9Pji1jrKFWN_3ItorOtGyoUECDuABKXjDUHHYOyVeIbNhhf_S_9-c8hv41cdSG1OnV0Jq1ZE-JjXWGyjRy8B4NdPDc-BMe3sG9L4UAYbaUhjwMlWlXtCgOCg5UV-9cZ_GxttCz5t8SB5t5E_6rJm2skMK5C0tWSaDA0Uiy50tH9CDN8FeeDb8wrrkvzGMueZe0n8lt',
  stage4Awakening:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381248/1b12ca8a-c61f-4c5a-98ed-0c13276002b6.png',
  stage4RehabBars:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAhBupS3-gTRQEPCufk6EWgH5otZHJNjJsBTIZx8UFCYExMOtNcuwfJxyj9svFLGl1tixrqsp1KByhdxZZ_xwLYQC3yTlg8ARsn8RREEL_C8eH3JEfjPHfyXFDFfv2W2OZPQJYtH1ulYjf1oEWffNZSMjBsMByqacxaGPrUKMxumNDmrcqTiitviEW7VihBDGXKvKYbkiNbO8r9BbZqWnSQVQ9TiZjhaXTakuY2EJWLFBfHUUcykq4z',
  stage5Service:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381857/1c016597-f0a0-473b-b84d-965d7d124378.png',
  stage5Portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAU0bEwnUDI82704FA0opMvJhp3-K54HCreL0uZKQlnBMBEBuBCXF1v10yrTI6qJbwnCAL1FWZnx1TDDAEkh7XADrZJURUrqPO-7Nk1jzzaFFsuS7DQbwOjIArx1-HL892vOuuxcYwJzsUgPqt4MIleQcWEfp02zdSdFQ0qiqc5T8NwfE-7Y1nwG73UAil-aN80ZqsOGbO23qOpQinFQBDbvSSIdDafnfSIldBZf9pAg7eTR3gLy1Ye',
  pillar2Tbi:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381681/352d8478-3a4d-46fb-8ef1-87ca4e66a8ae.png',
  prologueExcerpt:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381575/2a67569f-34f2-49dd-a706-3726a8f0d557.png',
  counselingPortrait:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381857/1c016597-f0a0-473b-b84d-965d7d124378.png',
  contactCleveland:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381792/12e6f3b5-b5b7-430d-b0a6-6513f7b470a8.png',
  saadHeroPortrait:
    'https://res.cloudinary.com/didqabx8q/image/upload/v1792529871/cd411dab-6d4e-4c2d-8d27-c3c500a4e5f3.png',
  usmcArchivalPlaque:
    'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381920/6c462856-cf88-45e0-b114-d5828926c9f8.png',
  face1HospitalVisit:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCr5ZSNQiEuGsf26I7VW5OqGAYZ8KNNpGWhr03zAdprCYr8zNHrToVgCa0tb50-7OChNLekl0j5NJV6QBRG7BYZNNRoW_jnZTcLTBxKWas9uGnKBf2thcOBpNEDP6H6BRGo2kDjbLPAvI6X_6mhTSf8oJ1JFYXRgNDShBUAK0bIQsBvw3SphbCCMUtVBxiewY7oI7GzWsup-xLauFE1WEb9Lbo-YSXuxM1uLM3z64syD9K2ShwWCZXf',
  face2Rideshare:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7_ubskrYwJxvbxfTGGHwt9a49DdnSwRB-N3pH1q9XNTc6ijpH4_kNA_Rh4GIBe3Di4I3Se72SrJwebkro7z_KNA-REGDvDubVX7xYgR61pWvYiQRpyI1gyVS2lfG302-CI2fUQRXil20SgjHoqUFCUurhZwV2GFD4k15uyH9o4KvB9e4yEiVuYShbn92BhLXJ2PZE7oXSc_rsO5tx2VQbmaonqH0Vqb8ehIA8xkLHTiHmtW2xomz',
  face3Veterans:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCA9kfDoQ5myWlYOtpKN4opHhgWRADM-UWeOMKDHPN-UBOCqrNMnsLIRMYfnWQV-Sp1mmOVVcpO0TGA59MV5fRMxwdfy0tlc3w_EToqDa_VJh7hC17EHWTvcuPhFpzaPtRVtsfXQEFY0MsBAyjFZwotM0Ini9hKzmKuCqc6Vh_nwFC2iEf9N_2A3QHBAwxoUAJFFjgeSAepdj8bv07wSJgWd2ykWhNQOqYCRfKcmi5ajuT1pbAmeOPO',
  face4Keynote:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCp_V5RJBNIUbv2iVDdFkJGxcDzzuxZ7lo1E8j8zKwGIExbTy9zHQOfWHAjomkBvw6CDYcl5_H5yN2dVKoeYtNxcIuUZsaCv8aBMGTGCC8ooV6PSkDL8_8ad_92Mn0Y2VEQ1WvEweFFeAAhY0r1S9o-67W0JKzO5nVo-AEt6hprtzSLHk-m5gC-nXIPhydeaHj7NjC1BuoNbHACEG5et1j_5qs-4WQl6OEGqKibQubTxt5oXxrT0G6i',
};

export const DOCUMENTARY_RECORDS: DocumentaryRecord[] = [
  {
    id: 'rec-01',
    title: 'Impact Point Archive',
    subtitle: 'Severe Vehicle Debris',
    location: 'I-71 Mile Marker 241 • Frontal Impact Zone',
    timeTag: '02:22 AM',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381201/32afa3b7-07a0-4463-8753-4075df968ce5.png',
    altText:
      'Archival police evidence photograph of crushed black sports sedan engine block and bent driver chassis on Ohio highway divider after severe midnight collision.',
    category: 'accident',
    sensitive: true,
  },
  {
    id: 'rec-02',
    title: 'Extrication Operation',
    subtitle: 'Heavy Machinery Rescue',
    location: 'Cleveland Rescue Squad • Tactical Extraction',
    timeTag: '02:41 AM',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381082/c7295933-3fab-4ea1-bd0e-5d0c850601c9.png',
    altText:
      'High contrast emergency responders with extraction jaws-of-life cutting vehicle door pillars amidst flashing red emergency signals on damp highway asphalt.',
    category: 'accident',
    sensitive: true,
  },
  {
    id: 'rec-03',
    title: 'Scene Investigation',
    subtitle: 'Accident Reconstruction',
    location: 'Highway Patrol Field Record • Post-Collision Field',
    timeTag: '03:15 AM',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381112/1348e300-c71e-411b-922f-f11118d00f40.png',
    altText:
      'Documentary high contrast photograph of highway debris, broken safety glass spread across the road lane reflecting cold night lights and emergency flares.',
    category: 'accident',
    sensitive: true,
  },
  {
    id: 'rec-04',
    title: 'ICU Coma Monitor',
    subtitle: 'Neuro-Intensive Care',
    location: 'Bed 12 • Trauma Intensive Care • Critical ICP',
    timeTag: 'Day 04',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381575/2a67569f-34f2-49dd-a706-3726a8f0d557.png',
    altText:
      'Medical ICU documentary photo of vital sign telemetry displays glowing in darkness showing elevated intracranial pressure numbers, monitors framing a resting patient room.',
    category: 'metrohealth',
    sensitive: true,
  },
  {
    id: 'rec-05',
    title: 'First Conscious Grip',
    subtitle: 'Reflex Response Documented',
    location: 'Day of Consciousness • Awakening Milestone',
    timeTag: 'Day 17',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381248/1b12ca8a-c61f-4c5a-98ed-0c13276002b6.png',
    altText:
      "High contrast black and white documentary photo of hospital patient hand weakly grasping family member's hand on white bedsheets on the morning of waking from coma.",
    category: 'metrohealth',
    sensitive: true,
  },
  {
    id: 'rec-06',
    title: 'First Hallway Transit',
    subtitle: 'Exiting Intensive Care',
    location: 'Neurological Floor Transfer • ICU Discharge',
    timeTag: 'Day 34',
    imageUrl:
      'https://res.cloudinary.com/h0krm6ex/image/upload/v1793381681/352d8478-3a4d-46fb-8ef1-87ca4e66a8ae.png',
    altText:
      'Editorial candid photography of Saad in hospital wheelchair with head bandage, smiling softly beside his physical therapist in MetroHealth hallway corridor.',
    category: 'metrohealth',
    sensitive: true,
  },
];

export const QUOTES: QuoteItem[] = [
  {
    id: 'q-1',
    text: '“Tell me what I can’t do, and I’ll show you what I can do, by the grace of God.”',
    attribution: 'Saad Hamed',
    chapter: 'Chapter 1: The Impact Point',
    category: 'The Cardinal Maxim',
  },
  {
    id: 'q-2',
    text: '“The coma was not an empty blackness; it was a sanctuary where God rebuilt my heart before giving back my hands.”',
    attribution: 'Saad Hamed',
    chapter: 'Chapter 4: The ICU Sanctuary',
    category: 'On the Medically Induced Coma',
  },
  {
    id: 'q-3',
    text: '“When doctors gave me 5%, God smiled and said that 5% is all I need to show you the fullness of My power.”',
    attribution: 'Saad Hamed',
    chapter: 'Chapter 8: Defying the Prognosis',
    category: 'On The Five Percent Odds',
  },
  {
    id: 'q-4',
    text: '“We are not promised tomorrow. Life is not a punishment, but a test of spirit, patience, and love.”',
    attribution: 'Saad Hamed',
    chapter: 'Prologue: The Awakening',
    category: 'The Sovereign Truth',
  },
  {
    id: 'q-5',
    text: '“Pain is temporary, but surrender is forever. In the Marine Corps they gave us discipline; at MetroHealth, God gave us purpose.”',
    attribution: 'Saad Hamed',
    chapter: 'Chapter 12: Semper Fidelis',
    category: 'The Brotherhood Code',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dr. Marcus Vance',
    title: '“Impossible to Put Down”',
    content:
      '“I read this entire book in a single 6-hour sitting. Saad’s transparency about his mental fights, the agonizing physical therapy, and how Christians, Jews, and Muslims gathered outside his hospital room restored my faith in humanity.”',
    role: 'Trauma Specialist & Neurologist',
    rating: 5,
    initial: 'M',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Sarah Jenkins, M.Ed.',
    title: '“A Spiritual Masterpiece”',
    content:
      '“The Three P’s—Prayer, Persistence, Patience—have become my daily morning mantra. If Saad could relearn how to breathe, move, and speak with a fractured skull, none of us have an excuse to surrender our dreams.”',
    role: 'Author & Leadership Coach',
    rating: 5,
    initial: 'S',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Tariq Al-Mansoor',
    title: '“Raw, Honest & Empowering”',
    content:
      '“He does not sugarcoat the agony. He takes you into the smell of the disinfectant, the despair of the wheelchair, and the lightning strike of his awakening. This book belongs on every nightstand in America.”',
    role: 'Community Organizer & Speaker',
    rating: 5,
    initial: 'T',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Major Donald Vance (Ret.)',
    title: '“The Essence of Marine Grit”',
    content:
      '“As a former officer, I see the absolute embodiment of Semper Fi in these pages. Saad didn’t just survive an impact that would crush steel; he turned his scars into armor for thousands of others.”',
    role: 'USMC Veteran & Advocate',
    rating: 5,
    initial: 'D',
    verified: true,
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1999 – 2004',
    title: 'LCPL Saadadin M. Hamed • “Big Yabba”',
    roleTag: 'U.S. Marine Corps',
    description:
      'Honorable military service stationed with the 510 Airframes Unit. Nicknamed “Teflon” for steadfast endurance and immovable loyalty. Decorated with a historic squadron farewell plaque that still hangs proudly today.',
    badgeText: 'Active Duty',
    icon: 'shield',
  },
  {
    year: '2012',
    title: 'The Family Vigil • Loss to Terrorism',
    roleTag: 'Family Tragedy • Loss',
    description:
      'A devastating assault took Saad’s beloved brother in an overseas terrorist incident. The crucible of family grief deepened his capacity for empathy and cemented an unshakeable connection to God’s protective grace.',
    badgeText: 'Family Vigil',
    icon: 'crisis_alert',
  },
  {
    year: 'September 28, 2014',
    title: 'The Fatal Crash • MetroHealth Cleveland',
    roleTag: '928: The Day',
    description:
      'A horrific midnight vehicular accident. Saad arrives comatose at Cleveland’s MetroHealth Medical Center. Neurosurgeons deliver a 5% survival prognosis to his weeping mother. Thirty days suspended in medically induced coma.',
    badgeText: 'Traumatic Brain Injury',
    icon: 'emergency',
    isHighlight: true,
  },
  {
    year: '2015 – Present',
    title: 'Birth of Saad 8.5 • Trauma Peer Counseling',
    roleTag: 'TSN • Author • Messenger',
    description:
      'Against medical expectation, Saad reclaims speech, motor skills, and independence. Joining the Trauma Survivors Network (TSN) at MetroHealth, he converts his rideshare vehicle into a sanctuary on wheels and authors the bestselling memoir 928: This Day Changed My Life.',
    badgeText: 'Reborn in Purpose',
    icon: 'verified',
  },
];

export const NEWS_ARTICLES: MediaArticle[] = [
  {
    id: 'news-1',
    outlet: 'WKYC Channel 3 (NBC Cleveland)',
    date: 'November 2024',
    title: '“From 5% Survival to Hope on Wheels: The Saad Hamed Story”',
    excerpt:
      'An in-depth broadcast profile exploring how a veteran given single-digit survival odds turned a rideshare taxi into a mobile counseling sanctuary for trauma survivors across Northeast Ohio.',
    type: 'Television',
    linkText: 'Watch Broadcast Segment',
  },
  {
    id: 'news-2',
    outlet: 'Cleveland Plain Dealer',
    date: 'September 2024',
    title: '“Ten Years Later: Defying Neurology at MetroHealth”',
    excerpt:
      'Chief neurotrauma physicians reflect on the night of September 28, 2014, and the unprecedented interfaith vigil that united strangers from 7 countries.',
    type: 'Print',
    linkText: 'Read Full Feature',
  },
  {
    id: 'news-3',
    outlet: 'Trauma Survivors Network Global Podcast',
    date: 'January 2025',
    title: 'Episode 42: “The Three P’s Blueprint with Saad Hamed”',
    excerpt:
      'Host Dr. Marcus Vance talks with Saad about managing cognitive fatigue, re-framing identity after traumatic brain injury, and finding purpose after loss.',
    type: 'Podcast',
    linkText: 'Listen to Episode (44 min)',
  },
  {
    id: 'news-4',
    outlet: 'Veterans Health & Resilience Summit',
    date: 'May 2025',
    title: 'Keynote Address: “Beyond Survival—Living with Divine Assignment”',
    excerpt:
      'Delivered before 1,200 veterans, neuro-rehabilitation specialists, and families in Columbus, Ohio. Standing ovation for the 928 methodology.',
    type: 'Keynote',
    linkText: 'Request Keynote Video',
  },
];

export const SAMPLE_CHAPTER_TEXT = `PROLOGUE: THE IMPACT POINT
By Saad Hamed

The rain was falling in cold, relentless sheets across Interstate 71 at 2:18 on that Sunday morning of September 28, 2014.

I had always considered myself invincible. In the United States Marine Corps, my brothers in the 510 Airframes Unit called me "Teflon." They joked that nothing stuck to me, that no heavy steel could break my frame, that no storm could knock me off balance. We had spent years conditioning our minds to believe that pain is simply weakness leaving the body.

Then came the impact.

It was not a screech of brakes followed by a bump. It was the violent, ungodly sound of steel crumpling into bone at sixty-five miles per hour. A head-on collision that pulverized glass, shattered facial bones, crushed my skull, and sent my body hurtling against the steering column before the vehicle folded like an accordion.

When the emergency sirens of the Cleveland Rescue Squad pierced the dark highway mist, the first paramedic on scene reached inside through the shattered driver door, searching for a carotid pulse. What he found was faint, erratic, and fading fast.

At MetroHealth Level 1 Trauma Center, my mother was greeted by three neurosurgeons whose expressions gave away the truth before they spoke a word.

"Mrs. Hamed," the lead surgeon said, his voice measured with clinical sympathy. "Your son has suffered catastrophic traumatic brain injury with severe intracranial swelling. Objectively, his probability of surviving until morning is less than five percent."

He gently paused before continuing.
"We must prepare you for organ procurement."

In that moment of incomprehensible agony, my mother looked directly into the surgeon's eyes. She did not scream. She did not crumble to the floor.

"His soul is anchored," she whispered. "As long as breath remains in his chest, we do not surrender his vessel. God is not finished with Saad."

What happened over the next seventeen days in that medically induced coma cannot be explained by medical textbooks alone. Strangers in Lebanon, Egypt, Jerusalem, France, Canada, Mexico, and across the United States—Muslims, Christians, and Jews—stopped their daily routines to lift my name into the heavens.

When I opened my eyes on Day 17, I could not speak. I could not move my right side. I could not remember how to swallow water without choking. 

The old Saad was gone. But Saad 8.5—reforged through Prayer, Persistence, and Patience—was about to begin.`;
