import{P as p,Q as h,j as a,l as n,I as o,E as x,F as i}from"./index-CYvwjxWG.js";import{o as b,a as g}from"./index-DZzaQXZz.js";import{u as j,a as r}from"./index-D5Rw-SRL.js";import"./react-lifecycles-compat.es-BNmx4O_T.js";import"./Col-DASOejDl.js";const C=()=>{const l=p(),{control:s,handleSubmit:m}=j({resolver:b(g)}),[d]=h(),c=async e=>{await d({email:e.email,name:e.name,password:e.password}).unwrap().then(()=>{i.success("Kullanıcı kaydı başarılı. Giriş sayfasına yönlendiriliyorsunuz."),setTimeout(()=>{l("/login")},2e3)}).catch(u=>{var t;i.error(((t=u.data)==null?void 0:t.message)||"Kullanıcı kaydı başarısız.")})};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"text-center mb-4",children:a.jsx(n,{to:"/login",className:"navbar-brand navbar-brand-autodark",children:a.jsx("img",{height:36,src:"/logo.svg",alt:"Tabler Template",onError:({currentTarget:e})=>{e.onerror=null,e.src="/noImage.svg"}})})}),a.jsx(o,{className:"card-md",children:a.jsxs(o.Body,{children:[a.jsx("h2",{className:"text-center mb-4",children:"Hesap oluşturun"}),a.jsxs("form",{onSubmit:m(c),autoComplete:"off",children:[a.jsx(r.Control,{id:"email",name:"email",label:"E-posta Adresi",placeholder:"E-posta adresi girin",classNameContainer:"mb-3",control:s}),a.jsx(r.Control,{id:"name",name:"name",label:"İsim",placeholder:"İsim girin",classNameContainer:"mb-3",control:s}),a.jsx(r.Control,{type:"password",id:"password",name:"password",label:"Şifre",placeholder:"Şifre girin",classNameContainer:"mb-3",showPasswordButton:!0,control:s}),a.jsx(x,{type:"submit",className:"w-100 mt-4",children:"Hesap Oluştur"})]})]})}),a.jsxs("div",{className:"text-center text-muted mt-3",children:["Zaten hesabınız var mı?"," ",a.jsx(n,{to:"/login",tabIndex:-1,children:"Giriş Yap"})]})]})};export{C as default};
