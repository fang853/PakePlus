window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>设备巡检报告系统</title>
    <style>
        :root{--primary:#1a3675;--border:#999;--bg:#f2f5f9;--white:#fff}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Microsoft YaHei',SimSun,sans-serif;background:var(--bg);padding:10px}
        .login-box{max-width:400px;margin:50px auto;background:var(--white);padding:25px 20px;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);text-align:center}
        .login-box h2{color:var(--primary);margin-bottom:20px;font-size:22px}
        .login-box input{width:100%;padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:8px;font-size:16px}
        .login-box button{width:100%;padding:14px;background:var(--primary);color:var(--white);border:none;border-radius:8px;font-size:18px;cursor:pointer;margin-top:5px}
        .err{color:red;display:none;margin-top:10px;font-size:14px}
        .main-content{display:none;max-width:1200px;margin:0 auto}
        .header{background:var(--primary);color:var(--white);padding:12px 16px;border-radius:10px;margin-bottom:15px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px}
        .header h1{font-size:18px}
        .user-info{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .badge{padding:3px 10px;border-radius:20px;font-size:12px;font-weight:bold}
        .badge-admin{background:#ffc107;color:#333}.badge-viewer{background:#28a745;color:#fff}
        .btn-logout{background:rgba(255,255,255,0.2);color:#fff;border:1px solid rgba(255,255,255,0.5);padding:5px 14px;border-radius:6px;cursor:pointer;font-size:14px}
        .project-bar{display:flex;align-items:center;gap:8px;margin-bottom:15px;flex-wrap:wrap}
        .project-bar select,.project-bar button,.project-bar input{padding:8px 12px;border-radius:6px;border:1px solid #ccc;font-size:14px;background:white}
        .project-bar button{background:var(--primary);color:#fff;border:none;cursor:pointer}
        .project-bar button.btn-danger{background:#e74c3c}
        .project-bar .project-name-input{width:130px}
        .nav{display:flex;gap:6px;margin-bottom:15px;flex-wrap:wrap}
        .nav button{flex:1 0 auto;padding:10px 8px;background:var(--white);border:2px solid #ccc;border-radius:8px;cursor:pointer;font-weight:bold;font-size:13px}
        .nav button.active{background:var(--primary);color:var(--white);border-color:var(--primary)}
        .page{display:none}.page.active{display:block}
        .card{background:var(--white);border-radius:10px;padding:15px;margin-bottom:20px;box-shadow:0 2px 6px rgba(0,0,0,0.05);overflow-x:auto}
        table{width:100%;border-collapse:collapse;margin:10px 0;font-size:12px}
        th,td{border:1px solid var(--border);padding:6px 8px;text-align:center;vertical-align:middle}
        th{background:var(--primary);color:var(--white);font-weight:normal}
        input[type="text"],input[type="date"],input[type="number"],select{padding:4px 6px;border:1px solid #ccc;border-radius:4px;font-size:12px;background:white;width:100%;box-sizing:border-box}
        input[type="radio"]{width:auto;margin:0 3px}
        input[type="checkbox"]{width:auto;margin:0 3px}
        .btn{padding:6px 12px;border:none;border-radius:6px;cursor:pointer;font-size:12px;margin:2px;white-space:nowrap}
        .btn-green{background:#27ae60;color:#fff}.btn-red{background:#e74c3c;color:#fff}
        .btn-outline{background:#fff;border:1px solid var(--primary);color:var(--primary)}
        .btn-save{background:var(--primary);color:#fff}
        .viewer-mode .btn-red{display:none!important}
        .viewer-mode .btn-admin-only{display:none!important}
        .modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;z-index:1000}
        .modal.show{display:flex}
        .modal-content{background:#fff;padding:20px;border-radius:12px;width:90%;max-width:500px;max-height:90vh;overflow-y:auto}
        .sign-canvas-wrapper canvas{display:block;width:100%;height:auto;border:2px solid #333;border-radius:6px;cursor:crosshair;aspect-ratio:2/1}
        .rotate-hint{display:none;text-align:center;color:#e67e22;margin-bottom:8px;font-size:14px}
        @media(max-width:768px){.modal-content{max-width:95%;padding:15px}.rotate-hint.show{display:block}}
        .print-btn{position:fixed;bottom:20px;right:20px;background:var(--primary);color:#fff;border:none;border-radius:50%;width:48px;height:48px;font-size:22px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:999;display:flex;align-items:center;justify-content:center}
        .sign-block{background:#f9fafb;padding:10px;margin-top:15px;border-radius:8px}
        .sign-block img{max-height:45px;cursor:pointer;border:1px solid #ccc;border-radius:4px}
        @media print{
            @page{size:A4;margin:10mm}body{background:#fff;padding:0}
            .main-content{max-width:100%;display:block!important}
            .header,.project-bar,.nav,.btn,.btn-logout,.modal,.print-btn,.page:not(.active){display:none!important}
            .page.active{display:block!important}
            .card{box-shadow:none;margin-bottom:0;page-break-before:always;break-inside:avoid}
            .card:first-of-type{page-break-before:auto}
            table{font-size:10pt;width:100%}th,td{padding:4px 6px}
            input,select{border:none!important;background:transparent;font-size:10pt;padding:0}
            input[type="radio"]{-webkit-appearance:none;display:inline-block;width:12px;height:12px;border:1px solid #000;border-radius:50%;position:relative}
            input[type="radio"]:checked::after{content:"";width:6px;height:6px;background:#000;border-radius:50%;position:absolute;top:2px;left:2px}
            .sign-block img{max-height:22mm}
        }
    </style>
</head>
<body>
<div class="login-box" id="loginBox">
    <h2>设备巡检报告系统</h2>
    <input type="text" id="username" placeholder="账号" autocomplete="off">
    <input type="password" id="password" placeholder="密码">
    <button onclick="login()">登录</button>
    <div class="err" id="errMsg">账号或密码错误</div>
</div>

<div class="main-content" id="mainContent">
    <div class="header"><div><h1>📋 设备巡检报告</h1></div><div class="user-info"><span id="displayName"></span><span class="badge" id="roleBadge"></span><button class="btn-logout" onclick="logout()">退出</button></div></div>
    <div class="project-bar">
        <select id="projectSelect" onchange="switchProject(this.value)"></select>
        <input type="text" class="project-name-input" id="newProjectName" placeholder="新项目名">
        <button onclick="addProject()">+ 新建</button>
        <button class="btn-admin-only" onclick="renameProject()">✎ 重命名</button>
        <button class="btn-danger btn-admin-only" onclick="deleteProject()">删除项目</button>
        <button onclick="openAccountManager()" id="accountMgrBtn" class="btn-admin-only" style="margin-left:auto;">👥 账号</button>
    </div>
    <div class="card" id="projectInfoCard"></div>
    <div class="nav">
        <button class="active" onclick="switchTab('ups')">🔌 UPS</button>
        <button onclick="switchTab('ac')">❄️ 空调</button>
        <button onclick="switchTab('pdu')">⚡ 配电</button>
        <button onclick="switchTab('fire')">📡 动环</button>
        <button onclick="switchTab('battery')">🔋 电池</button>
        <button onclick="switchTab('service')">📝 客户服务</button>
    </div>
    <div class="page active" id="page-ups"><div id="upsContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('ups')">+ 添加UPS</button></div></div>
    <div class="page" id="page-ac"><div id="acContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('ac')">+ 添加空调</button></div></div>
    <div class="page" id="page-pdu"><div id="pduContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('pdu')">+ 添加配电柜</button></div></div>
    <div class="page" id="page-fire"><div id="fireContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('fire')">+ 添加动环</button></div></div>
    <div class="page" id="page-battery"><div id="batteryContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('battery')">+ 添加电池组</button></div></div>
    <div class="page" id="page-service"><div id="serviceContainer"></div><div style="text-align:right;margin-top:10px"><button class="btn btn-green" onclick="addDevice('service')">+ 添加服务报告</button></div></div>
    <button class="print-btn" onclick="window.print()" title="打印">🖨️</button>
</div>
<div class="modal" id="signModal"><div class="modal-content"><h3>手写签名</h3><div class="rotate-hint" id="rotateHint">📱 请将手机横屏以获得更大书写空间</div><div class="sign-canvas-wrapper"><canvas id="signCanvas" width="400" height="150"></canvas></div><div style="margin-top:10px;display:flex;gap:10px"><button class="btn btn-outline" onclick="clearSign()">清除</button><button class="btn btn-save" onclick="saveSign()">确认</button></div></div></div>
<div class="modal" id="accountModal"><div class="modal-content"><h3>巡检员账号管理</h3><div id="accountList"></div><div style="margin-top:10px"><input id="newAccName" placeholder="账号" style="width:100%;margin:5px 0"><input id="newAccPwd" placeholder="密码" style="width:100%;margin:5px 0"><button class="btn btn-green" onclick="addAccount()">添加</button></div></div></div>

<script>
const ADMIN={name:"fanglbjd",pw:"678818fang",role:"admin",display:"管理员"};
let inspectors=JSON.parse(localStorage.getItem('inspector_acc')||'[{"name":"viewer","pw":"viewer123","display":"巡检员"}]');
function saveInspectors(){localStorage.setItem('inspector_acc',JSON.stringify(inspectors));}
function auth(u,p){return u===ADMIN.name&&p===ADMIN.pw?ADMIN:inspectors.find(a=>a.name===u&&a.pw===p)||null;}

const KEY='inspect_db_v13';
function defProj(){return{id:'p'+Date.now(),name:'新项目',info:{unit:'',zip:'',addr:'',contact:'',phone:''},ups:[],ac:[],pdu:[],fire:[],battery:[],service:[]};}
function loadData(){let raw=localStorage.getItem(KEY);if(!raw){let p=defProj();return{projects:[p],curProj:p.id};}let data=JSON.parse(raw);if(!data.projects||!data.projects.length)data={projects:[defProj()],curProj:''};if(!data.curProj||!data.projects.find(p=>p.id===data.curProj))data.curProj=data.projects[0].id;return data;}
function saveData(d){localStorage.setItem(KEY,JSON.stringify(d));}
let app=loadData(),user=null;
function getProj(){return app.projects.find(p=>p.id===app.curProj)||app.projects[0];}
function refreshSel(){let s=document.getElementById('projectSelect');s.innerHTML=app.projects.map(p=>`<option value="${p.id}" ${p.id===app.curProj?'selected':''}>${p.name}</option>`).join('');}
function switchProject(id){app.curProj=id;saveData(app);refreshSel();renderAll();}
function addProject(){let n=document.getElementById('newProjectName').value.trim()||'新项目';let p=defProj();p.name=n;app.projects.push(p);app.curProj=p.id;document.getElementById('newProjectName').value='';saveData(app);refreshSel();renderAll();}
function renameProject(){let p=getProj();let n=prompt('名称',p.name);if(n){p.name=n;saveData(app);refreshSel();renderAll();}}
function deleteProject(){if(app.projects.length<=1){alert('至少保留一个');return;}if(!confirm('删除？'))return;app.projects=app.projects.filter(p=>p.id!==app.curProj);app.curProj=app.projects[0].id;saveData(app);refreshSel();renderAll();}
function login(){let u=document.getElementById('username').value.trim().toLowerCase(),p=document.getElementById('password').value.trim();let acc=auth(u,p);if(acc){user=acc;sessionStorage.setItem('cu',JSON.stringify(acc));document.getElementById('loginBox').style.display='none';document.getElementById('mainContent').style.display='block';document.getElementById('displayName').textContent=acc.display||acc.name;let b=document.getElementById('roleBadge');b.textContent=acc.role==='admin'?'管理员':'巡检员';b.className='badge '+(acc.role==='admin'?'badge-admin':'badge-viewer');document.body.classList.toggle('viewer-mode',acc.role!=='admin');document.getElementById('accountMgrBtn').style.display=acc.role==='admin'?'inline-block':'none';refreshSel();renderAll();}else{document.getElementById('errMsg').style.display='block';}}
function logout(){sessionStorage.removeItem('cu');location.reload();}

function renderProjectInfo(){let p=getProj();document.getElementById('projectInfoCard').innerHTML=`<h3>用户信息</h3><table><tr><th>用户单位</th><td><input value="${p.info.unit||''}" onchange="updInfo('unit',this.value)"></td><th>邮政编码</th><td><input value="${p.info.zip||''}" onchange="updInfo('zip',this.value)"></td></tr><tr><th>设备地址</th><td colspan="3"><input value="${p.info.addr||''}" onchange="updInfo('addr',this.value)"></td></tr><tr><th>联系人</th><td><input value="${p.info.contact||''}" onchange="updInfo('contact',this.value)"></td><th>联系电话</th><td><input value="${p.info.phone||''}" onchange="updInfo('phone',this.value)"></td></tr></table>`;}
function updInfo(f,v){getProj().info[f]=v;saveData(app);}
function switchTab(t){let m={ups:0,ac:1,pdu:2,fire:3,battery:4,service:5};document.querySelectorAll('.nav button').forEach((b,i)=>b.classList.toggle('active',i===m[t]));document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page-'+t).classList.add('active');}
function setF(type,idx,field,val){getProj()[type][idx][field]=val;saveData(app);}
function setChk(type,idx,i,v){getProj()[type][idx].checks[i]=v;saveData(app);}
function setBatChk(type,idx,grp,i,v){let d=getProj()[type][idx];let k=grp===1?'bat1c':'bat2c';if(!d[k])d[k]=[1,1,1,1,1,1];d[k][i]=v;saveData(app);}
function setBatCell(type,idx,grp,cell,f,v){let d=getProj()[type][idx];let vk=grp===1?'bat1v':'bat2v';let rk=grp===1?'bat1r':'bat2r';if(!d[vk])d[vk]=Array(40).fill('');if(!d[rk])d[rk]=Array(40).fill('');if(f==='v')d[vk][cell]=v;else d[rk][cell]=v;saveData(app);}
function signBlock(type,idx){let d=getProj()[type][idx];return`<div class="sign-block"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"><strong>服务人员签名：</strong><img src="${d.sigServ||''}" onclick="openSign('${type}',${idx},'serv')"><button class="btn btn-outline" onclick="openSign('${type}',${idx},'serv')">✎</button><strong>服务时间：</strong><input type="text" value="${d.servTime||''}" onchange="setF('${type}',${idx},'servTime',this.value)" placeholder="____年__月__日" style="width:130px;"></div><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:5px;"><strong>用户代表签名：</strong><img src="${d.sigUser||''}" onclick="openSign('${type}',${idx},'user')"><button class="btn btn-outline" onclick="openSign('${type}',${idx},'user')">✎</button><strong>用户确认时间：</strong><input type="text" value="${d.userTime||''}" onchange="setF('${type}',${idx},'userTime',this.value)" placeholder="____年__月__日" style="width:130px;"></div></div>`;}

let signTarget={type:'',idx:-1,role:''},orientationLocked=false;
async function openSign(type,idx,role){signTarget={type,idx,role};document.getElementById('signModal').classList.add('show');let canvas=document.getElementById('signCanvas'),ctx=canvas.getContext('2d');if(screen.orientation&&screen.orientation.lock){try{await screen.orientation.lock('landscape');orientationLocked=true;}catch(e){orientationLocked=false;}}else{if(window.innerWidth<window.innerHeight)document.getElementById('rotateHint').classList.add('show');else document.getElementById('rotateHint').classList.remove('show');}let w=canvas.parentElement.clientWidth;canvas.width=Math.max(400,w*0.9);canvas.height=canvas.width*0.5;ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='#000';ctx.lineWidth=Math.max(2,canvas.width/200);ctx.lineCap='round';let drawing=false;canvas.onmousedown=e=>{drawing=true;ctx.beginPath();ctx.moveTo(e.offsetX,e.offsetY);};canvas.onmousemove=e=>{if(drawing){ctx.lineTo(e.offsetX,e.offsetY);ctx.stroke();}};canvas.onmouseup=canvas.onmouseleave=()=>drawing=false;canvas.ontouchstart=e=>{e.preventDefault();drawing=true;let rect=canvas.getBoundingClientRect();let sx=canvas.width/rect.width,sy=canvas.height/rect.height;let t=e.touches[0];ctx.beginPath();ctx.moveTo((t.clientX-rect.left)*sx,(t.clientY-rect.top)*sy);};canvas.ontouchmove=e=>{e.preventDefault();if(!drawing)return;let rect=canvas.getBoundingClientRect();let sx=canvas.width/rect.width,sy=canvas.height/rect.height;let t=e.touches[0];ctx.lineTo((t.clientX-rect.left)*sx,(t.clientY-rect.top)*sy);ctx.stroke();};canvas.ontouchend=canvas.ontouchcancel=()=>drawing=false;}
function clearSign(){let c=document.getElementById('signCanvas');c.getContext('2d').clearRect(0,0,c.width,c.height);}
function saveSign(){let dataURL=document.getElementById('signCanvas').toDataURL();let{type,idx,role}=signTarget;if(type&&idx>=0){let d=getProj()[type][idx];if(role==='serv')d.sigServ=dataURL;else d.sigUser=dataURL;saveData(app);}document.getElementById('signModal').classList.remove('show');if(orientationLocked&&screen.orientation&&screen.orientation.unlock){screen.orientation.unlock();orientationLocked=false;}renderAll();}

function addDevice(type){
    let proj=getProj(),dev={id:type[0]+Date.now()};
    if(type==='ups')dev={...dev,code:'',model:'',capacity:'',location:'',recent:'无异常',workStatus:'市电逆变供电',alarm:'',bypass:'',checks:[1,1,1,1,1,1,1,1]};
    else if(type==='ac')dev={...dev,indoorModel:'',indoorSN:'',condModel:'',warranty:'保内',condSN:''};
    else if(type==='pdu')dev={...dev,name:'',location:'',model:'',check0:1,check1:1,check2:1,check3:1,check4:1,check5:1,check6:1,check7:1,check8:1,check9:1,check10:1,curAB:'',curBC:'',curCA:'',volAB:'',volBC:'',volCA:'',roomTemp:'',notes:''};
    else if(type==='fire')dev={};
    else if(type==='battery')dev={code:'',bat1c:[1,1,1,1,1,1],bat2c:[1,1,1,1,1,1],bat1v:Array(40).fill(''),bat2v:Array(40).fill(''),bat1r:Array(40).fill(''),bat2r:Array(40).fill('')};
    else if(type==='service')dev={customer:'',address:'',contact:'',contactTel:'',ticketNo:'',date:'',equipments:[],goodParts:[],badParts:[],businessType:{},scope:'',process:'',remarks:'',feedback1:'满意',feedback2:'满意',feedback3:'满意',feedback4:'满意'};
    proj[type].push(dev);saveData(app);renderAll();
}
function deleteDevice(type,idx){if(!confirm('确定删除？'))return;getProj()[type].splice(idx,1);saveData(app);renderAll();}

// ========== 各模块完整表格 ==========
function renderUps(){
    let proj=getProj();let container=document.getElementById('upsContainer');
    container.innerHTML=proj.ups.map((dev,idx)=>{let c=dev.checks||[1,1,1,1,1,1,1,1];return`<div class="card"><h3>UPS 服务报告 #${idx+1} 编码:<input size="16" value="${dev.code||''}" onchange="setF('ups',${idx},'code',this.value)"> 型号:<input size="10" value="${dev.model||''}" onchange="setF('ups',${idx},'model',this.value)"> 容量:<input size="8" value="${dev.capacity||''}" onchange="setF('ups',${idx},'capacity',this.value)"> 位置:<input size="10" value="${dev.location||''}" onchange="setF('ups',${idx},'location',this.value)"></h3>
    <table><tr><th colspan="4">近期情况</th><td colspan="2"><select onchange="setF('ups',${idx},'recent',this.value)">${['无异常','配电箱空开跳过闸','UPS转过旁路','UPS损坏过保险'].map(v=>`<option ${dev.recent===v?'selected':''}>${v}</option>`).join('')}</select></td></tr>
    <tr><th colspan="4">工作现状</th><td colspan="2"><select onchange="setF('ups',${idx},'workStatus',this.value)">${['市电逆变供电','电池逆变供电','旁路状态','告警状态'].map(v=>`<option ${dev.workStatus===v?'selected':''}>${v}</option>`).join('')}</select></td></tr></table>
    <table><tr><th>#</th><th>外观检视项目</th><th>合格</th><th>需要处理</th></tr>${['主控板电气连接','输入/输出端子紧固','空开容量符合规格','风扇散热正常','器件电缆无损坏老化','滤波电容无泄漏','运行环境符合要求','电池房无易燃易爆物'].map((n,i)=>`<tr><td>${i+1}</td><td>${n}</td><td><input type="radio" name="uc${idx}${i}" ${c[i]===1?'checked':''} onclick="setChk('ups',${idx},${i},1)"></td><td><input type="radio" name="uc${idx}${i}" ${c[i]===0?'checked':''} onclick="setChk('ups',${idx},${i},0)"></td></tr>`).join('')}</table>
    <h4>电气检查</h4><table><tr><th colspan="6">输入状态</th></tr><tr><td>Van</td><td><input value="${dev.van||''}" onchange="setF('ups',${idx},'van',this.value)"></td><td>Vbn</td><td><input value="${dev.vbn||''}" onchange="setF('ups',${idx},'vbn',this.value)"></td><td>Vcn</td><td><input value="${dev.vcn||''}" onchange="setF('ups',${idx},'vcn',this.value)"></td></tr><tr><td>Ia</td><td><input value="${dev.ia||''}" onchange="setF('ups',${idx},'ia',this.value)"></td><td>Ib</td><td><input value="${dev.ib||''}" onchange="setF('ups',${idx},'ib',this.value)"></td><td>Ic</td><td><input value="${dev.ic||''}" onchange="setF('ups',${idx},'ic',this.value)"></td></tr></table>
    <table><tr><th colspan="6">充电器状态</th></tr><tr><td>浮充</td><td><input value="${dev.floatChg||''}" onchange="setF('ups',${idx},'floatChg',this.value)"></td><td>均充</td><td><input value="${dev.equalChg||''}" onchange="setF('ups',${idx},'equalChg',this.value)"></td><td>手动</td><td><input value="${dev.manual||''}" onchange="setF('ups',${idx},'manual',this.value)"></td></tr><tr><td colspan="2">母线电容纹波电压</td><td colspan="4"><input value="${dev.ripple||''}" onchange="setF('ups',${idx},'ripple',this.value)"></td></tr></table>
    <h4>逆变器/输出滤波电流</h4><table><tr><td>Vab</td><td><input value="${dev.invVab||''}" onchange="setF('ups',${idx},'invVab',this.value)"></td><td>Vbc</td><td><input value="${dev.invVbc||''}" onchange="setF('ups',${idx},'invVbc',this.value)"></td><td>Vca</td><td><input value="${dev.invVca||''}" onchange="setF('ups',${idx},'invVca',this.value)"></td></tr><tr><td>Ia</td><td><input value="${dev.invIa||''}" onchange="setF('ups',${idx},'invIa',this.value)"></td><td>Ib</td><td><input value="${dev.invIb||''}" onchange="setF('ups',${idx},'invIb',this.value)"></td><td>Ic</td><td><input value="${dev.invIc||''}" onchange="setF('ups',${idx},'invIc',this.value)"></td></tr><tr><td>Rs</td><td><input value="${dev.rs||''}" onchange="setF('ups',${idx},'rs',this.value)"></td><td>St</td><td><input value="${dev.st||''}" onchange="setF('ups',${idx},'st',this.value)"></td><td>Ts</td><td><input value="${dev.ts||''}" onchange="setF('ups',${idx},'ts',this.value)"></td></tr></table>
    <h4>负载分布</h4><table><tr><td>A相</td><td>KW:<input size="6" value="${dev.loadAKW||''}" onchange="setF('ups',${idx},'loadAKW',this.value)"> KVA:<input size="6" value="${dev.loadAKVA||''}" onchange="setF('ups',${idx},'loadAKVA',this.value)"> %:<input size="6" value="${dev.loadAPct||''}" onchange="setF('ups',${idx},'loadAPct',this.value)"></td></tr><tr><td>B相</td><td>KW:<input size="6" value="${dev.loadBKW||''}" onchange="setF('ups',${idx},'loadBKW',this.value)"> KVA:<input size="6" value="${dev.loadBKVA||''}" onchange="setF('ups',${idx},'loadBKVA',this.value)"> %:<input size="6" value="${dev.loadBPct||''}" onchange="setF('ups',${idx},'loadBPct',this.value)"></td></tr><tr><td>C相</td><td>KW:<input size="6" value="${dev.loadCKW||''}" onchange="setF('ups',${idx},'loadCKW',this.value)"> KVA:<input size="6" value="${dev.loadCKVA||''}" onchange="setF('ups',${idx},'loadCKVA',this.value)"> %:<input size="6" value="${dev.loadCPct||''}" onchange="setF('ups',${idx},'loadCPct',this.value)"></td></tr></table>
    <h4>温度情况</h4><table><tr><td>机房</td><td><input value="${dev.roomTemp||''}" onchange="setF('ups',${idx},'roomTemp',this.value)"></td><td>机器内部</td><td><input value="${dev.internalTemp||''}" onchange="setF('ups',${idx},'internalTemp',this.value)"></td></tr><tr><td>母线电容</td><td><input value="${dev.busCapTemp||''}" onchange="setF('ups',${idx},'busCapTemp',this.value)"></td><td>逆变输出电容</td><td><input value="${dev.invCapTemp||''}" onchange="setF('ups',${idx},'invCapTemp',this.value)"></td></tr><tr><td>输出变压器</td><td><input value="${dev.transTemp||''}" onchange="setF('ups',${idx},'transTemp',this.value)"></td><td>各功率器件</td><td><input value="${dev.otherTemp||''}" onchange="setF('ups',${idx},'otherTemp',this.value)"></td></tr></table>
    <h4>功能测试</h4><table><tr><td>逆变/旁路转换</td><td><select onchange="setF('ups',${idx},'func1',this.value)"><option ${dev.func1=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>电池放电充电</td><td><select onchange="setF('ups',${idx},'func2',this.value)"><option ${dev.func2=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>UPS同步控制</td><td><select onchange="setF('ups',${idx},'func3',this.value)"><option ${dev.func3=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <textarea style="width:100%" onchange="setF('ups',${idx},'summary',this.value)">${dev.summary||''}</textarea>
    ${signBlock('ups',idx)}<button class="btn btn-red" onclick="deleteDevice('ups',${idx})">删除此UPS</button></div>`;}).join('');
}

function renderAc(){
    let proj=getProj();document.getElementById('acContainer').innerHTML=proj.ac.map((dev,idx)=>`
    <div class="card"><h3>空调服务报告 #${idx+1}</h3><table><tr><td>室内机型号</td><td><input value="${dev.indoorModel||''}" onchange="setF('ac',${idx},'indoorModel',this.value)"></td><td>编号</td><td><input value="${dev.indoorSN||''}" onchange="setF('ac',${idx},'indoorSN',this.value)"></td></tr><tr><td>冷凝器型号</td><td><input value="${dev.condModel||''}" onchange="setF('ac',${idx},'condModel',this.value)"></td><td>保内/外</td><td><select onchange="setF('ac',${idx},'warranty',this.value)"><option ${dev.warranty=='保内'?'selected':''}>保内</option><option>保外</option></select></td></tr><tr><td>冷凝器编号</td><td colspan="3"><input value="${dev.condSN||''}" onchange="setF('ac',${idx},'condSN',this.value)"></td></tr></table>
    <h4>场地电压</h4><table><tr><td>Vab</td><td><input value="${dev.vab||''}" onchange="setF('ac',${idx},'vab',this.value)"></td><td>Vbc</td><td><input value="${dev.vbc||''}" onchange="setF('ac',${idx},'vbc',this.value)"></td><td>Vac</td><td><input value="${dev.vac||''}" onchange="setF('ac',${idx},'vac',this.value)"></td></tr><tr><td>接触器</td><td><select onchange="setF('ac',${idx},'contactor',this.value)"><option ${dev.contactor=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>波动</td><td><select onchange="setF('ac',${idx},'voltFluct',this.value)"><option ${dev.voltFluct=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>最高V</td><td><input value="${dev.voltMax||''}" onchange="setF('ac',${idx},'voltMax',this.value)"></td></tr><tr><td>进线紧固</td><td><select onchange="setF('ac',${idx},'wireTight',this.value)"><option ${dev.wireTight=='是'?'selected':''}>是</option><option>否</option></select></td><td>部件紧固</td><td colspan="3"><select onchange="setF('ac',${idx},'partWireTight',this.value)"><option ${dev.partWireTight=='是'?'selected':''}>是</option><option>否</option></select></td></tr></table>
    <h4>控制显示</h4><table><tr><td>控制板电压</td><td><input value="${dev.ctrlVolt||''}" onchange="setF('ac',${idx},'ctrlVolt',this.value)"></td><td>屏幕显示</td><td><select onchange="setF('ac',${idx},'display',this.value)"><option ${dev.display=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>参数设定</td><td><select onchange="setF('ac',${idx},'paramCtrl',this.value)"><option ${dev.paramCtrl=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>告警功能</td><td><select onchange="setF('ac',${idx},'alarmFunc',this.value)"><option ${dev.alarmFunc=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>冷凝器</h4><table><tr><td>底座固定</td><td><select onchange="setF('ac',${idx},'condBase',this.value)"><option ${dev.condBase=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>电控性能</td><td><select onchange="setF('ac',${idx},'condElec',this.value)"><option ${dev.condElec=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>运行电流</td><td><input value="${dev.condCur||''}" onchange="setF('ac',${idx},'condCur',this.value)"></td><td>冷凝压力</td><td><input value="${dev.condPress||''}" onchange="setF('ac',${idx},'condPress',this.value)"></td></tr><tr><td>翅片清洁</td><td colspan="3"><select onchange="setF('ac',${idx},'condFins',this.value)"><option ${dev.condFins=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>室内风机</h4><table><tr><td>1#电流</td><td><input value="${dev.fan1Cur||''}" onchange="setF('ac',${idx},'fan1Cur',this.value)"></td><td>2#电流</td><td><input value="${dev.fan2Cur||''}" onchange="setF('ac',${idx},'fan2Cur',this.value)"></td></tr><tr><td>皮带磨损</td><td><select onchange="setF('ac',${idx},'belt',this.value)"><option ${dev.belt=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>轴承</td><td><select onchange="setF('ac',${idx},'bearing',this.value)"><option ${dev.bearing=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>皮带轮</td><td><select onchange="setF('ac',${idx},'pulley',this.value)"><option ${dev.pulley=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>风筒叶轮</td><td><select onchange="setF('ac',${idx},'impeller',this.value)"><option ${dev.impeller=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>滤网洁净</td><td colspan="3"><select onchange="setF('ac',${idx},'filter',this.value)"><option ${dev.filter=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>保温</h4><table><tr><td>设备内部</td><td><select onchange="setF('ac',${idx},'insul1',this.value)"><option ${dev.insul1=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>风帽</td><td><select onchange="setF('ac',${idx},'insul2',this.value)"><option ${dev.insul2=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>制冷管路</td><td><select onchange="setF('ac',${idx},'insul3',this.value)"><option ${dev.insul3=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>水管路</td><td><select onchange="setF('ac',${idx},'insul4',this.value)"><option ${dev.insul4=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>加湿/排水</h4><table><tr><td>加湿电流</td><td><input value="${dev.humCur||''}" onchange="setF('ac',${idx},'humCur',this.value)"></td><td>水盘清洁</td><td><select onchange="setF('ac',${idx},'humClean',this.value)"><option ${dev.humClean=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>加湿控制</td><td><select onchange="setF('ac',${idx},'humCtrl',this.value)"><option ${dev.humCtrl=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>水盘排水</td><td><select onchange="setF('ac',${idx},'humDrain',this.value)"><option ${dev.humDrain=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>供水水压</td><td><select onchange="setF('ac',${idx},'waterPress',this.value)"><option ${dev.waterPress=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>蒸发器排水</td><td><select onchange="setF('ac',${idx},'evapDrain',this.value)"><option ${dev.evapDrain=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>压缩机</h4><table><tr><td>1#电流</td><td><input value="${dev.comp1Cur||''}" onchange="setF('ac',${idx},'comp1Cur',this.value)"></td><td>2#电流</td><td><input value="${dev.comp2Cur||''}" onchange="setF('ac',${idx},'comp2Cur',this.value)"></td></tr><tr><td>声音</td><td><select onchange="setF('ac',${idx},'compSnd',this.value)"><option ${dev.compSnd=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>高压1#</td><td><input value="${dev.hp1||''}" onchange="setF('ac',${idx},'hp1',this.value)"></td></tr><tr><td>高压2#</td><td><input value="${dev.hp2||''}" onchange="setF('ac',${idx},'hp2',this.value)"></td><td>低压1#</td><td><input value="${dev.lp1||''}" onchange="setF('ac',${idx},'lp1',this.value)"></td></tr><tr><td>低压2#</td><td><input value="${dev.lp2||''}" onchange="setF('ac',${idx},'lp2',this.value)"></td><td>发热</td><td><select onchange="setF('ac',${idx},'compHeat',this.value)"><option ${dev.compHeat=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>回气过热度</td><td><select onchange="setF('ac',${idx},'superheat',this.value)"><option ${dev.superheat=='正常'?'selected':''}>正常</option><option>不正常</option></select></td><td>液镜</td><td><select onchange="setF('ac',${idx},'sightGlass',this.value)"><option ${dev.sightGlass=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>干燥过滤器</td><td colspan="3"><select onchange="setF('ac',${idx},'dryer',this.value)"><option ${dev.dryer=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    <h4>除湿/加热/水冷</h4><table><tr><td>湿度设定</td><td><select onchange="setF('ac',${idx},'humSet',this.value)"><option ${dev.humSet=='绝对湿度'?'selected':''}>绝对湿度</option><option>相对湿度</option></select></td><td>除湿控制</td><td><select onchange="setF('ac',${idx},'dehumCtrl',this.value)"><option ${dev.dehumCtrl=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>加热I1</td><td><input value="${dev.heatI1||''}" onchange="setF('ac',${idx},'heatI1',this.value)"></td><td>加热I2</td><td><input value="${dev.heatI2||''}" onchange="setF('ac',${idx},'heatI2',this.value)"></td></tr><tr><td>加热I3</td><td><input value="${dev.heatI3||''}" onchange="setF('ac',${idx},'heatI3',this.value)"></td><td>加热保护</td><td><select onchange="setF('ac',${idx},'heatProt',this.value)"><option ${dev.heatProt=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr><tr><td>进水T1</td><td><input value="${dev.inT1||''}" onchange="setF('ac',${idx},'inT1',this.value)"></td><td>出水T2</td><td><input value="${dev.outT2||''}" onchange="setF('ac',${idx},'outT2',this.value)"></td></tr><tr><td>压力差</td><td><input value="${dev.pressDiff||''}" onchange="setF('ac',${idx},'pressDiff',this.value)"></td><td>阀门控制</td><td><select onchange="setF('ac',${idx},'valveCtrl',this.value)"><option ${dev.valveCtrl=='正常'?'selected':''}>正常</option><option>不正常</option></select></td></tr></table>
    ${signBlock('ac',idx)}<button class="btn btn-red" onclick="deleteDevice('ac',${idx})">删除此空调</button></div>`).join('');
}

function renderPdu(){
    let proj=getProj();document.getElementById('pduContainer').innerHTML=proj.pdu.map((dev,idx)=>`
    <div class="card"><h3>配电服务报告 #${idx+1}</h3><table><tr><td>设备名称</td><td><input value="${dev.name||''}" onchange="setF('pdu',${idx},'name',this.value)"></td><td>位置</td><td><input value="${dev.location||''}" onchange="setF('pdu',${idx},'location',this.value)"></td></tr></table>
    <table><tr><th>项目</th><th>Pass</th><th>Fail</th></tr>${['设备过热','清洁配电盘','照明检查','电路安全','图纸资料','异响','异常震动','维修空间','螺栓紧固','异常电流','接头温度'].map((n,i)=>`<tr><td>${n}</td><td><input type="radio" name="p${idx}${i}" ${dev['check'+i]==1?'checked':''} onclick="setF('pdu',${idx},'check'+i,1)"></td><td><input type="radio" name="p${idx}${i}" ${dev['check'+i]==0?'checked':''} onclick="setF('pdu',${idx},'check'+i,0)"></td></tr>`).join('')}</table>
    <table><tr><td></td><td>AB(An)</td><td>BC(Bn)</td><td>CA(Cn)</td></tr><tr><td>电流</td><td><input value="${dev.curAB||''}" onchange="setF('pdu',${idx},'curAB',this.value)"></td><td><input value="${dev.curBC||''}" onchange="setF('pdu',${idx},'curBC',this.value)"></td><td><input value="${dev.curCA||''}" onchange="setF('pdu',${idx},'curCA',this.value)"></td></tr><tr><td>电压</td><td><input value="${dev.volAB||''}" onchange="setF('pdu',${idx},'volAB',this.value)"></td><td><input value="${dev.volBC||''}" onchange="setF('pdu',${idx},'volBC',this.value)"></td><td><input value="${dev.volCA||''}" onchange="setF('pdu',${idx},'volCA',this.value)"></td></tr><tr><td>室温</td><td colspan="3"><input value="${dev.roomTemp||''}" onchange="setF('pdu',${idx},'roomTemp',this.value)"></td></tr></table>
    <textarea style="width:100%" onchange="setF('pdu',${idx},'notes',this.value)">${dev.notes||''}</textarea>${signBlock('pdu',idx)}<button class="btn btn-red" onclick="deleteDevice('pdu',${idx})">删除此配电柜</button></div>`).join('');
}

function renderFire(){
    let proj=getProj();document.getElementById('fireContainer').innerHTML=proj.fire.map((dev,idx)=>`
    <div class="card"><h3>动环消防巡检 #${idx+1}</h3>
    <table><tr><th colspan="2">监控平台系统</th></tr>
    <tr><td>录像机 - 设备参数设置</td><td><select onchange="setF('fire',${idx},'vrParam',this.value)"><option ${dev.vrParam=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>录像机 - 录像回放</td><td><select onchange="setF('fire',${idx},'vrPlayback',this.value)"><option ${dev.vrPlayback=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>录像机 - 云台控制</td><td><select onchange="setF('fire',${idx},'vrPtz',this.value)"><option ${dev.vrPtz=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>录像资料储存时间</td><td><input value="${dev.vrStorageTime||''}" onchange="setF('fire',${idx},'vrStorageTime',this.value)"></td></tr>
    <tr><td>现有数量/型号/硬盘容量</td><td><input style="width:60px" value="${dev.vrCount||''}" onchange="setF('fire',${idx},'vrCount',this.value)"> <input style="width:80px" value="${dev.vrModel||''}" onchange="setF('fire',${idx},'vrModel',this.value)"> <input style="width:80px" value="${dev.vrDisk||''}" onchange="setF('fire',${idx},'vrDisk',this.value)"></td></tr>
    <tr><td>客户端 - 各平台功能控制</td><td><select onchange="setF('fire',${idx},'clientCtrl',this.value)"><option ${dev.clientCtrl=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>摄像机 - 控制（上/下，左/右，变倍）</td><td><select onchange="setF('fire',${idx},'camCtrl',this.value)"><option ${dev.camCtrl=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>摄像机 - 清晰度</td><td><select onchange="setF('fire',${idx},'camClarity',this.value)"><option ${dev.camClarity=='非常清晰'?'selected':''}>非常清晰</option><option>清晰</option><option>不清晰</option></select></td></tr>
    <tr><td>报警联动</td><td><select onchange="setF('fire',${idx},'alarmLink',this.value)"><option ${dev.alarmLink=='有'?'selected':''}>有</option><option>无</option></select> <select onchange="setF('fire',${idx},'alarmStatus',this.value)"><option ${dev.alarmStatus=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>现有数量</td><td><input value="${dev.camCount||''}" onchange="setF('fire',${idx},'camCount',this.value)"></td></tr></table>
    <h4>网络系统</h4><table><tr><td>接入交换机</td><td><select onchange="setF('fire',${idx},'netSwitch',this.value)"><option ${dev.netSwitch=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr><tr><td>智能采集网关</td><td><select onchange="setF('fire',${idx},'gateway',this.value)"><option ${dev.gateway=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr><tr><td>计算机终端</td><td><select onchange="setF('fire',${idx},'pcTerminal',this.value)"><option ${dev.pcTerminal=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr><tr><td>监视器</td><td><select onchange="setF('fire',${idx},'monitor',this.value)"><option ${dev.monitor=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr><tr><td>多屏幕拼接处理器</td><td><select onchange="setF('fire',${idx},'videoWall',this.value)"><option ${dev.videoWall=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr></table>
    <h4>机柜/PDU/门禁/排风/环境</h4><table>
    <tr><td>机柜外观完好</td><td><select onchange="setF('fire',${idx},'cabAppear',this.value)"><option ${dev.cabAppear=='是'?'selected':''}>是</option><option>否</option></select></td></tr>
    <tr><td>机柜功能正常</td><td><select onchange="setF('fire',${idx},'cabFunc',this.value)"><option ${dev.cabFunc=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>PDU供电正常</td><td><select onchange="setF('fire',${idx},'pduPower',this.value)"><option ${dev.pduPower=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>PDU监控正常</td><td><select onchange="setF('fire',${idx},'pduMonitor',this.value)"><option ${dev.pduMonitor=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>PDU数据准确</td><td><select onchange="setF('fire',${idx},'pduData',this.value)"><option ${dev.pduData=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>门禁控制器</td><td><select onchange="setF('fire',${idx},'accCtrl',this.value)"><option ${dev.accCtrl=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>读卡器</td><td><select onchange="setF('fire',${idx},'cardReader',this.value)"><option ${dev.cardReader=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>开门按钮</td><td><select onchange="setF('fire',${idx},'exitButton',this.value)"><option ${dev.exitButton=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>告警测试检查</td><td><select onchange="setF('fire',${idx},'alarmTest',this.value)"><option ${dev.alarmTest=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>查看历史记录</td><td><input value="${dev.accHistory||''}" onchange="setF('fire',${idx},'accHistory',this.value)"></td></tr>
    <tr><td>接入数量</td><td><input value="${dev.accCount||''}" onchange="setF('fire',${idx},'accCount',this.value)"></td></tr>
    <tr><td>排风电机电压</td><td><select onchange="setF('fire',${idx},'fanMotor',this.value)"><option ${dev.fanMotor=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>排烟风机外观</td><td><select onchange="setF('fire',${idx},'fanAppear',this.value)"><option ${dev.fanAppear=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>排风管道</td><td><select onchange="setF('fire',${idx},'fanDuct',this.value)"><option ${dev.fanDuct=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>吊顶</td><td><select onchange="setF('fire',${idx},'ceiling',this.value)"><option ${dev.ceiling=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>墙面</td><td><select onchange="setF('fire',${idx},'wall',this.value)"><option ${dev.wall=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>保洁</td><td><select onchange="setF('fire',${idx},'cleaning',this.value)"><option ${dev.cleaning=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr>
    <tr><td>静电地板</td><td><select onchange="setF('fire',${idx},'esdFloor',this.value)"><option ${dev.esdFloor=='正常'?'selected':''}>正常</option><option>异常</option></select></td></tr></table>
    ${signBlock('fire',idx)}<button class="btn btn-red" onclick="deleteDevice('fire',${idx})">删除此动环巡检</button></div>`).join('');
}

function renderBattery(){
    let proj=getProj();document.getElementById('batteryContainer').innerHTML=proj.battery.map((dev,idx)=>{
        let b1c=dev.bat1c||[1,1,1,1,1,1],b2c=dev.bat2c||[1,1,1,1,1,1],b1v=dev.bat1v||Array(40).fill(''),b1r=dev.bat1r||Array(40).fill(''),b2v=dev.bat2v||Array(40).fill(''),b2r=dev.bat2r||Array(40).fill('');
        return`<div class="card"><h3>电池检测报告 #${idx+1} 编码:<input size="14" value="${dev.code||''}" onchange="setF('battery',${idx},'code',this.value)"></h3>
        <table><tr><th>项目</th><th>组1合格</th><th>需处理</th><th>组2合格</th><th>需处理</th></tr>${['外观损坏变形漏液','电池线端子过热腐蚀','电池组松脱灰尘','电池房温湿度','易燃易爆物品','电池开关容量'].map((n,i)=>`<tr><td>${n}</td><td><input type="radio" name="b1${idx}${i}" ${b1c[i]===1?'checked':''} onclick="setBatChk('battery',${idx},1,${i},1)"></td><td><input type="radio" name="b1${idx}${i}" ${b1c[i]===0?'checked':''} onclick="setBatChk('battery',${idx},1,${i},0)"></td><td><input type="radio" name="b2${idx}${i}" ${b2c[i]===1?'checked':''} onclick="setBatChk('battery',${idx},2,${i},1)"></td><td><input type="radio" name="b2${idx}${i}" ${b2c[i]===0?'checked':''} onclick="setBatChk('battery',${idx},2,${i},0)"></td></tr>`).join('')}</table>
        <h4>第一组电气检测</h4><div style="overflow-x:auto;"><table><tr><th>#</th><th>V</th><th>MΩ</th><th>#</th><th>V</th><th>MΩ</th></tr>${Array(20).fill().map((_,i)=>`<tr><td>${i+1}</td><td><input size="4" value="${b1v[i]||''}" onchange="setBatCell('battery',${idx},1,${i},'v',this.value)"></td><td><input size="4" value="${b1r[i]||''}" onchange="setBatCell('battery',${idx},1,${i},'r',this.value)"></td><td>${i+21}</td><td><input size="4" value="${b1v[i+20]||''}" onchange="setBatCell('battery',${idx},1,${i+20},'v',this.value)"></td><td><input size="4" value="${b1r[i+20]||''}" onchange="setBatCell('battery',${idx},1,${i+20},'r',this.value)"></td></tr>`).join('')}</table></div>
        <h4>第二组电气检测</h4><div style="overflow-x:auto;"><table><tr><th>#</th><th>V</th><th>MΩ</th><th>#</th><th>V</th><th>MΩ</th></tr>${Array(20).fill().map((_,i)=>`<tr><td>${i+1}</td><td><input size="4" value="${b2v[i]||''}" onchange="setBatCell('battery',${idx},2,${i},'v',this.value)"></td><td><input size="4" value="${b2r[i]||''}" onchange="setBatCell('battery',${idx},2,${i},'r',this.value)"></td><td>${i+21}</td><td><input size="4" value="${b2v[i+20]||''}" onchange="setBatCell('battery',${idx},2,${i+20},'v',this.value)"></td><td><input size="4" value="${b2r[i+20]||''}" onchange="setBatCell('battery',${idx},2,${i+20},'r',this.value)"></td></tr>`).join('')}</table></div>
        <textarea style="width:100%;margin-top:8px" onchange="setF('battery',${idx},'summary',this.value)">${dev.summary||''}</textarea>${signBlock('battery',idx)}<button class="btn btn-red" onclick="deleteDevice('battery',${idx})">删除此电池巡检</button></div>`;
    }).join('');
}

function renderService(){
    let proj=getProj();document.getElementById('serviceContainer').innerHTML=proj.service.map((dev,idx)=>`
    <div class="card"><h3>客户服务报告 #${idx+1}</h3>
    <table><tr><th colspan="2">客户名称 Customer</th><td colspan="4"><input value="${dev.customer||''}" onchange="setF('service',${idx},'customer',this.value)"></td></tr>
    <tr><th colspan="2">设备地址 Address</th><td colspan="4"><input value="${dev.address||''}" onchange="setF('service',${idx},'address',this.value)"></td></tr>
    <tr><th>联系人</th><td><input value="${dev.contact||''}" onchange="setF('service',${idx},'contact',this.value)"></td><th>联系电话</th><td><input value="${dev.contactTel||''}" onchange="setF('service',${idx},'contactTel',this.value)"></td></tr>
    <tr><th colspan="2">任务号 Ticket No.</th><td colspan="4"><input value="${dev.ticketNo||''}" onchange="setF('service',${idx},'ticketNo',this.value)"></td></tr>
    <tr><th colspan="2">服务日期 Date of Service</th><td colspan="4"><input type="date" value="${dev.date||''}" onchange="setF('service',${idx},'date',this.value)"></td></tr></table>
    <h4>设备信息</h4><table><tr><th>型号 Model</th><th>条码 Bar Code</th><th>数量 Qty</th></tr>${dev.equipments?.map((e,i)=>`<tr><td><input value="${e.model||''}" onchange="updateServiceSub('service',${idx},'equipments',${i},'model',this.value)"></td><td><input value="${e.barcode||''}" onchange="updateServiceSub('service',${idx},'equipments',${i},'barcode',this.value)"></td><td><input value="${e.qty||''}" onchange="updateServiceSub('service',${idx},'equipments',${i},'qty',this.value)"></td></tr>`).join('')||'<tr><td colspan="3">无</td></tr>'}</table><button class="btn btn-outline" onclick="addServiceRow('service',${idx},'equipments')">+ 添加设备行</button>
    <h4>损坏备件</h4><table><tr><th colspan="3">好件信息 New Parts</th><th colspan="3">坏件信息 Failure Parts</th></tr><tr><th>型号</th><th>条码</th><th>数量</th><th>型号</th><th>条码</th><th>数量</th></tr>${Array.isArray(dev.goodParts)&&dev.goodParts.map((p,i)=>{let bad=dev.badParts?.[i]||{};return`<tr><td><input value="${p.model||''}" onchange="updateServiceSub('service',${idx},'goodParts',${i},'model',this.value)"></td><td><input value="${p.barcode||''}" onchange="updateServiceSub('service',${idx},'goodParts',${i},'barcode',this.value)"></td><td><input value="${p.qty||''}" onchange="updateServiceSub('service',${idx},'goodParts',${i},'qty',this.value)"></td><td><input value="${bad.model||''}" onchange="updateServiceSub('service',${idx},'badParts',${i},'model',this.value)"></td><td><input value="${bad.barcode||''}" onchange="updateServiceSub('service',${idx},'badParts',${i},'barcode',this.value)"></td><td><input value="${bad.qty||''}" onchange="updateServiceSub('service',${idx},'badParts',${i},'qty',this.value)"></td></tr>`}).join('')||'<tr><td colspan="6">无</td></tr>'}</table><button class="btn btn-outline" onclick="addServiceRow('service',${idx},'parts')">+ 添加备件行</button>
    <h4>业务类型</h4><table>${['紧急服务','工程安装','巡检','维修','调试','支持','勘测','验收','升级'].map((n,i)=>`<tr><td>${n}</td><td><input type="checkbox" ${dev.businessType?.['type'+i]?'checked':''} onchange="setF('service',${idx},'businessType','type'+i,this.checked?'1':'0')"></td></tr>`).join('')}</table>
    <h4>工作描述</h4><textarea style="width:100%" onchange="setF('service',${idx},'scope',this.value)">${dev.scope||''}</textarea>
    <h4>处理过程与结果</h4><textarea style="width:100%" onchange="setF('service',${idx},'process',this.value)">${dev.process||''}</textarea>
    <h4>备注</h4><textarea style="width:100%" onchange="setF('service',${idx},'remarks',this.value)">${dev.remarks||''}</textarea>
    <h4>客户意见栏</h4><table><tr><td>服务及时性</td><td><select onchange="setF('service',${idx},'feedback1',this.value)"><option ${dev.feedback1=='满意'?'selected':''}>满意</option><option>不满意</option></select></td><td>处理彻底性</td><td><select onchange="setF('service',${idx},'feedback2',this.value)"><option ${dev.feedback2=='满意'?'selected':''}>满意</option><option>不满意</option></select></td></tr><tr><td>技术水平</td><td><select onchange="setF('service',${idx},'feedback3',this.value)"><option ${dev.feedback3=='满意'?'selected':''}>满意</option><option>不满意</option></select></td><td>服务态度</td><td><select onchange="setF('service',${idx},'feedback4',this.value)"><option ${dev.feedback4=='满意'?'selected':''}>满意</option><option>不满意</option></select></td></tr></table>
    ${signBlock('service',idx)}<button class="btn btn-red" onclick="deleteDevice('service',${idx})">删除此服务报告</button></div>`).join('');
}
function addServiceRow(type,idx,section){let d=getProj()[type][idx];if(section==='equipments'){if(!d.equipments)d.equipments=[];d.equipments.push({model:'',barcode:'',qty:''});}else if(section==='parts'){if(!d.goodParts)d.goodParts=[];if(!d.badParts)d.badParts=[];d.goodParts.push({model:'',barcode:'',qty:''});d.badParts.push({model:'',barcode:'',qty:''});}saveData(app);renderService();}
function updateServiceSub(type,idx,arrName,rowIndex,field,val){let d=getProj()[type][idx];d[arrName][rowIndex][field]=val;saveData(app);}

// 账号管理
function openAccountManager(){if(user?.role==='admin'){document.getElementById('accountModal').classList.add('show');renderAccList();}}
function renderAccList(){document.getElementById('accountList').innerHTML=inspectors.map((a,i)=>`<div style="display:flex;gap:5px;align-items:center;margin:5px 0"><span>${a.name}</span><input type="password" id="apwd${i}" placeholder="新密码" style="width:100px"><button class="btn btn-outline" onclick="chgPwd(${i})">改密</button><button class="btn btn-red" onclick="delAcc(${i})">删除</button></div>`).join('');}
function addAccount(){let n=document.getElementById('newAccName').value.trim(),p=document.getElementById('newAccPwd').value.trim();if(!n||!p)return alert('请输入');if(inspectors.find(a=>a.name===n))return alert('已存在');inspectors.push({name:n,pw:p,display:n});saveInspectors();renderAccList();}
function chgPwd(i){let np=document.getElementById('apwd'+i).value.trim();if(np)inspectors[i].pw=np;saveInspectors();renderAccList();}
function delAcc(i){if(confirm('删除？')){inspectors.splice(i,1);saveInspectors();renderAccList();}}

function renderAll(){renderProjectInfo();renderUps();renderAc();renderPdu();renderFire();renderBattery();renderService();}

(function(){let saved=JSON.parse(sessionStorage.getItem('cu'));if(saved){user=saved;document.getElementById('loginBox').style.display='none';document.getElementById('mainContent').style.display='block';document.getElementById('displayName').textContent=saved.display||saved.name;let b=document.getElementById('roleBadge');b.textContent=saved.role==='admin'?'管理员':'巡检员';b.className='badge '+(saved.role==='admin'?'badge-admin':'badge-viewer');document.body.classList.toggle('viewer-mode',saved.role!=='admin');document.getElementById('accountMgrBtn').style.display=saved.role==='admin'?'inline-block':'none';refreshSel();renderAll();}})();
</script>
</body>
</html>