import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function Company() {

const services = [
"Web Development",
"UI/UX Design",
"Hosting & Cloud",
"Android Applications",
"Digital Marketing",
"Blockchain Development"
]

const features = [
"Scalable architecture approach",
"Secure & optimized systems",
"Modern UI standards",
"Fast delivery cycles",
"Future-proof technology stack",
"Expert technical leadership"
]

return (
<div className="bg-[#05070d] text-cyan-300 min-h-screen font-sans">

{/* HERO */}
<section className="text-center py-28 border-b border-cyan-500/20">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
>
WideBeast
</motion.h1>

<p className="mt-6 text-xl text-gray-400">
Engineering the Future of Digital Innovation
</p>

</section>


{/* ABOUT */}
<section className="max-w-5xl mx-auto py-20 px-6 text-center">

<h2 className="text-4xl font-bold mb-6 text-cyan-300">
About WideBeast
</h2>

<p className="text-gray-400 leading-relaxed text-lg">
WideBeast is a future-focused technology company specializing in advanced digital
solutions, modern application architecture, and blockchain innovation.
We transform ideas into scalable digital ecosystems designed for performance,
security, and long-term growth.
</p>

</section>


{/* SERVICES */}
<section className="py-20 px-6 bg-white/5 backdrop-blur-xl">

<h2 className="text-4xl text-center font-bold mb-14 text-purple-300">
Working Sectors
</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{services.map((service,i)=>(
<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 rounded-2xl border border-cyan-400/30 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,255,0.15)]"
>
<h3 className="text-xl font-semibold text-cyan-300">{service}</h3>
<p className="text-gray-400 mt-3">
Enterprise-level solutions built with modern technology standards.
</p>
</motion.div>
))}

</div>

</section>


{/* WHY CHOOSE US */}
<section className="py-20 px-6 text-center">

<h2 className="text-4xl font-bold mb-14 text-cyan-300">
Why Choose WideBeast
</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

{features.map((f,i)=>(
<div key={i} className="flex items-center gap-3 p-6 border border-purple-400/20 rounded-xl bg-white/5">
<CheckCircle className="text-cyan-400"/>
<span className="text-gray-300">{f}</span>
</div>
))}

</div>

</section>


{/* VISION + MISSION */}
<section className="py-20 px-6 bg-white/5 backdrop-blur-xl">

<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-center">

<div>
<h3 className="text-3xl font-bold text-purple-300 mb-4">Vision</h3>
<p className="text-gray-400">
To become a global technology leader delivering intelligent digital systems
that power businesses of tomorrow.
</p>
</div>

<div>
<h3 className="text-3xl font-bold text-cyan-300 mb-4">Mission</h3>
<p className="text-gray-400">
To empower organizations with advanced technology solutions that are scalable,
secure, and innovation-driven.
</p>
</div>

</div>

</section>


{/* CTA */}
<section className="py-24 text-center">

<h2 className="text-4xl font-bold text-cyan-300 mb-6">
Ready to Build Something Powerful?
</h2>

<p className="text-gray-400 mb-8">
Let’s create your next digital success.
</p>

<a
href="mailto:yashwant5082@gmail.com"
className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
>
Contact WideBeast
</a>

</section>


{/* FOOTER */}
<footer className="text-center py-6 border-t border-cyan-500/20 text-gray-500">
© {new Date().getFullYear()} WideBeast — Future Technology
</footer>

</div>
)
}
