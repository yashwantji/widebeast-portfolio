import { useEffect } from "react"

export default function FuturisticEffects(){

useEffect(()=>{
const move=e=>{
document.documentElement.style.setProperty(
"--x", e.clientX+"px")
document.documentElement.style.setProperty(
"--y", e.clientY+"px")
}
window.addEventListener("mousemove",move)
return()=>window.removeEventListener("mousemove",move)
},[])

return(
<>
{/* mouse glow */}
<div className="pointer-events-none fixed inset-0 z-0
bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(0,255,255,0.15),transparent_40%)]"/>

{/* scanlines */}
<div className="pointer-events-none fixed inset-0 z-0 opacity-10
bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,255,255,.2)_3px)]"/>

{/* grid */}
<div className="pointer-events-none fixed inset-0 z-0 opacity-20
bg-[linear-gradient(rgba(0,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,.1)_1px,transparent_1px)]
bg-[size:40px_40px]"/>

{/* floating orbs */}
<div className="fixed inset-0 -z-10 overflow-hidden">
{[...Array(6)].map((_,i)=>(
<div key={i}
className="absolute rounded-full blur-3xl opacity-30 animate-pulse"
style={{
width:200+Math.random()*200,
height:200+Math.random()*200,
background:i%2?"#00ffff":"#7c3aed",
top:Math.random()*100+"%",
left:Math.random()*100+"%",
animationDuration:5+Math.random()*10+"s"
}}/>
))}
</div>
</>
)
}
