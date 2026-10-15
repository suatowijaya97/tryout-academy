window.CBT_DEMO=true;
(()=>{
const Q=[
  {
    "id": "Q001",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Penalaran Umum",
    "text": "Semua peserta tryout memiliki akun. Rani adalah peserta tryout. Kesimpulan yang pasti benar adalah …",
    "A": "Rani memiliki akun.",
    "B": "Rani tidak memiliki akun.",
    "C": "Semua pemilik akun adalah Rani.",
    "D": "Rani bukan peserta tryout.",
    "E": "",
    "correct": "A",
    "explanation": "Rani termasuk peserta, sehingga ketentuan bahwa semua peserta memiliki akun berlaku untuk Rani."
  },
  {
    "id": "Q002",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Penalaran Umum",
    "text": "Tentukan bilangan berikutnya: 3, 7, 15, 31, …",
    "A": "47",
    "B": "55",
    "C": "63",
    "D": "65",
    "E": "",
    "correct": "C",
    "explanation": "Setiap suku dikalikan 2 lalu ditambah 1. Jadi 31 × 2 + 1 = 63."
  },
  {
    "id": "Q003",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Pengetahuan Kuantitatif",
    "text": "Jika 3x + 7 = 25, nilai x adalah …",
    "A": "4",
    "B": "5",
    "C": "6",
    "D": "8",
    "E": "",
    "correct": "C",
    "explanation": "3x = 25 − 7 = 18, maka x = 6."
  },
  {
    "id": "Q004",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Pengetahuan Kuantitatif",
    "text": "Harga buku Rp80.000 mendapat diskon 15%. Harga setelah diskon adalah …",
    "A": "Rp65.000",
    "B": "Rp68.000",
    "C": "Rp70.000",
    "D": "Rp72.000",
    "E": "",
    "correct": "B",
    "explanation": "Diskon = 15% × 80.000 = 12.000. Harga akhir = 68.000."
  },
  {
    "id": "Q005",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Pemahaman Bacaan dan Menulis",
    "text": "Kalimat yang menggunakan kata baku adalah …",
    "A": "Jadwal praktek dokter berubah.",
    "B": "Kami menganalisis data penelitian.",
    "C": "Ia meminta ijin kepada guru.",
    "D": "Resiko kegiatan itu rendah.",
    "E": "",
    "correct": "B",
    "explanation": "Bentuk baku: praktik, menganalisis, izin, dan risiko."
  },
  {
    "id": "Q006",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Pemahaman Bacaan dan Menulis",
    "text": "Penulisan kata depan yang tepat adalah …",
    "A": "Buku itu disimpan dilemari.",
    "B": "Mereka berjalan kesekolah.",
    "C": "Ayah bekerja di kantor.",
    "D": "Surat itu di kirim kemarin.",
    "E": "",
    "correct": "C",
    "explanation": "Kata depan di ditulis terpisah dari tempat: di kantor. Awalan di- pada dikirim ditulis serangkai."
  },
  {
    "id": "Q007",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Pengetahuan dan Pemahaman Umum",
    "text": "Makna kata efisien dalam kalimat “Sistem ini membuat pekerjaan lebih efisien” adalah …",
    "A": "Menghabiskan lebih banyak waktu",
    "B": "Menggunakan sumber daya secara hemat dan tepat",
    "C": "Memperbanyak tahapan kerja",
    "D": "Menghilangkan semua pemeriksaan",
    "E": "",
    "correct": "B",
    "explanation": "Efisien berarti tepat guna tanpa membuang waktu, tenaga, atau biaya."
  },
  {
    "id": "Q008",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Literasi Bahasa Indonesia",
    "text": "Bacalah teks berikut.\n\nPerpustakaan sekolah memperpanjang jam buka hingga sore. Kebijakan ini memberi kesempatan kepada siswa yang mengikuti kegiatan ekstrakurikuler untuk tetap meminjam buku.\n\nTujuan utama perpanjangan jam buka adalah …",
    "A": "Mengurangi jumlah buku",
    "B": "Memberi akses bagi siswa yang berkegiatan ekstrakurikuler",
    "C": "Menghapus kegiatan ekstrakurikuler",
    "D": "Membatasi peminjaman buku",
    "E": "",
    "correct": "B",
    "explanation": "Tujuan tersebut disebut langsung pada kalimat kedua."
  },
  {
    "id": "Q009",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Literasi Bahasa Inggris",
    "text": "Read the text.\n\nMaya used to drive to school. Now she cycles because she wants to reduce air pollution.\n\nWhy does Maya cycle to school?",
    "A": "To reduce air pollution",
    "B": "To arrive later",
    "C": "To avoid exercise",
    "D": "To buy a new car",
    "E": "",
    "correct": "A",
    "explanation": "The text explicitly states that she wants to reduce air pollution."
  },
  {
    "id": "Q010",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Literasi Bahasa Inggris",
    "text": "“The library is closed on Sundays.” This means visitors …",
    "A": "can visit every Sunday",
    "B": "cannot visit on Sundays",
    "C": "must visit on Sundays",
    "D": "can only visit on Sundays",
    "E": "",
    "correct": "B",
    "explanation": "Closed means the library is not open to visitors on Sundays."
  },
  {
    "id": "Q011",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Penalaran Matematika",
    "text": "Sebuah kelas memiliki 40 siswa. Sebanyak 60% mengikuti klub matematika. Berapa siswa yang mengikuti klub matematika?",
    "A": "16",
    "B": "20",
    "C": "24",
    "D": "28",
    "E": "",
    "correct": "C",
    "explanation": "60% × 40 = 24 siswa."
  },
  {
    "id": "Q012",
    "packageId": "TO-DEMO",
    "active": true,
    "subtest": "Penalaran Matematika",
    "text": "Dua pekerja menyelesaikan 18 paket dalam 3 jam. Jika produktivitas tiap pekerja sama, berapa paket yang diselesaikan 4 pekerja dalam 2 jam?",
    "A": "12",
    "B": "18",
    "C": "24",
    "D": "36",
    "E": "",
    "correct": "C",
    "explanation": "Produktivitas = 18 ÷ (2 × 3) = 3 paket per pekerja per jam. Jadi 4 × 2 × 3 = 24 paket."
  }
];
let users=[{id:'U1',username:'siswa.demo',name:'Nadia Putri',role:'student',active:true},{id:'A1',username:'admin',name:'Admin Akademik',role:'admin',active:true},{id:'U2',username:'raka.saputra',name:'Raka Saputra',role:'student',active:true},{id:'U3',username:'dewi.lestari',name:'Dewi Lestari',role:'student',active:true},{id:'U4',username:'andi.pratama',name:'Andi Pratama',role:'student',active:true}];
let packages=[{id:'TO-DEMO',title:'Tryout Diagnostik UTBK',description:'Latihan awal untuk mengenali kemampuan di tujuh subtes.',duration:30,status:'active',review:true},{id:'TO-02',title:'Latihan Penalaran Matematika',description:'Perkuat logika, perbandingan, dan pemecahan masalah.',duration:15,status:'active',review:true},{id:'TO-03',title:'Latihan Literasi & Pemahaman Bacaan',description:'Latih kemampuan memahami teks dan menarik kesimpulan.',duration:20,status:'draft',review:false}];
let questions=[...Q,...Q.filter(q=>q.subtest==='Penalaran Matematika').map(q=>({...q,id:q.id+'M',packageId:'TO-02'})),...Q.filter(q=>q.subtest.startsWith('Literasi')).map(q=>({...q,id:q.id+'L',packageId:'TO-03'}))];
let attempts=[];let seq=0;
const KEY='tryout-academy-v1';
function reload(){const raw=localStorage.getItem(KEY);if(raw){const d=JSON.parse(raw);users=d.users;packages=d.packages;questions=d.questions;attempts=d.attempts;seq=d.seq;}}
function persist(){localStorage.setItem(KEY,JSON.stringify({users,packages,questions,attempts,seq}));}
users.forEach(u=>u.code='DEMO');
reload();persist();

function pub(a){return {id:a.id,userId:a.userId,packageId:a.packageId,title:a.title,status:a.status,start:a.start,deadline:a.deadline,score:a.score||0,correct:a.correct||0,total:a.questions.length,submitted:a.submitted||0}}
function finish(a){a.status='submitted';a.submitted=Date.now();a.correct=a.questions.filter(q=>a.answers[q.id]===q.correct).length;a.score=Math.round(a.correct/a.questions.length*10000)/100;}
function result(a){const groups={};a.questions.forEach(q=>{const s=groups[q.subtest]||(groups[q.subtest]={name:q.subtest,correct:0,total:0});s.total++;if(a.answers[q.id]===q.correct)s.correct++});const allowed=packages.find(p=>p.id===a.packageId).review;return {...pub(a),answered:Object.keys(a.answers).length,reviewAllowed:allowed,subtests:Object.values(groups),review:allowed?a.questions.map(q=>({...q,selected:a.answers[q.id]||''})):[]};}
function attemptView(a){return {...pub(a),questions:a.questions.map(({correct,explanation,...q})=>q),answers:{...a.answers},flags:[...a.flags],revision:a.revision,serverTime:Date.now()};}
async function api(action,p={},token){reload();const user=users.find(u=>token==='local:'+u.id);
if(action!=='login' && action!=='logout' && (!user||!user.active))throw Error('Silakan masuk kembali.');
if(['adminData','upsertPackage','upsertQuestion','createUser','resetCode','toggleUser'].includes(action)&&user.role!=='admin')throw Error('Menu khusus demo admin.');

if(action==='login'){const u=users.find(u=>u.username===p.username&&u.code===p.code&&u.active);if(!u)throw Error('Username atau kode akses tidak sesuai.');return {token:'local:'+u.id,user:u};}
if(action==='logout')return {ok:true};
if(action==='home')return {user,packages:packages.filter(p=>p.status==='active').map(p=>({...p,count:questions.filter(q=>q.packageId===p.id&&q.active).length})),attempts:attempts.filter(a=>a.userId===user.id).map(pub)};
if(action==='adminData')return {packages,questions,users,attempts:attempts.map(pub)};
if(action==='start'){let a=attempts.find(a=>a.userId===user.id&&a.packageId===p.packageId);if(a&&a.status==='submitted')return {finished:true,attemptId:a.id};if(!a){const pack=packages.find(x=>x.id===p.packageId&&x.status==='active');if(!pack)throw Error('Paket tidak aktif.');if(!questions.some(q=>q.packageId===pack.id&&q.active))throw Error('Paket belum memiliki soal aktif.');a={id:'DEMO'+(++seq),userId:user.id,packageId:pack.id,title:pack.title,start:Date.now(),deadline:Date.now()+pack.duration*60000,status:'active',answers:{},flags:[],questions:questions.filter(q=>q.packageId===pack.id&&q.active),revision:0};attempts.push(a)}return attemptView(a);}
if(action==='save'||action==='submit'){const a=attempts.find(a=>a.id===p.attemptId&&a.userId===user.id);if(!a)throw Error('Ujian tidak ditemukan.');if(a.status==='submitted')return {finished:true,attemptId:a.id};if(Date.now()>=a.deadline){finish(a);return {finished:true,attemptId:a.id}}if(p.revision!==a.revision)throw Error('Jawaban berubah di tab lain. Muat ulang.');a.answers={...p.answers};a.flags=[...p.flags];a.revision++;if(action==='submit'){finish(a);return {finished:true,attemptId:a.id}}return {ok:true,revision:a.revision,serverTime:Date.now()};}
if(action==='result'){const a=attempts.find(a=>a.id===p.attemptId&&(a.userId===user.id||user.role==='admin'));if(!a)throw Error('Hasil tidak ditemukan.');if(a.status!=='submitted'){if(Date.now()<a.deadline)throw Error('Ujian belum selesai.');finish(a);}return result(a);}
if(action==='upsertPackage'){let old=packages.find(x=>x.id===p.data.id);if(old)Object.assign(old,p.data);else packages.push({...p.data,id:'P'+Date.now()});return {ok:true};}
if(action==='upsertQuestion'){let old=questions.find(x=>x.id===p.data.id);if(old)Object.assign(old,p.data);else questions.push({...p.data,id:'Q'+Date.now()});return {ok:true};}
if(action==='createUser'){if(users.some(u=>u.username===p.data.username))throw Error('Username sudah digunakan.');const code=crypto.randomUUID().slice(0,8);users.push({...p.data,id:'U'+Date.now(),active:true,code});return {username:p.data.username,code};}
if(action==='resetCode'){const u=users.find(u=>u.id===p.userId);u.code=crypto.randomUUID().slice(0,8);return {username:u.username,code:u.code};}
if(action==='toggleUser'){const u=users.find(u=>u.id===p.userId);u.active=!u.active;return {ok:true}}throw Error('Aksi demo belum tersedia.');
};
window.DEMO_API=async (...args)=>{const result=await api(...args);persist();return result;};
})();