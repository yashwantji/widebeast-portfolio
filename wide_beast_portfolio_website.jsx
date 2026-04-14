import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

export default function WideBeastPortfolio() {
  const [dark, setDark] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yashwantji/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  const theme = dark
    ? "bg-black text-green-400"
    : "bg-white text-gray-800";

  return (
    <div className={`${theme} min-h-screen transition-all duration-500`}>
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 border-b border-green-500">
        <h1 className="text-2xl font-bold">WideBeast</h1>
        <div className="flex gap-4">
          <Button onClick={() => setDark(!dark)} variant="outline">
            {dark ? <Sun size={18}/> : <Moon size={18}/>} Theme
          </Button>
          <a href="https://github.com/yashwantji" target="_blank"><Github/></a>
          <a href="https://linkedin.com/in/yashwant-gupta-739259241" target="_blank"><Linkedin/></a>
        </div>
      </div>

      {/* Hero */}
      <section className="text-center py-20">
        <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl font-bold mb-6">
          Yashwant Gupta
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          Full Stack Developer & Tech Lead building scalable apps, blockchain systems, and AI-powered platforms.
        </p>
      </section>

      {/* About */}
      <section className="p-10 grid md:grid-cols-2 gap-8">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Company Description</h3>
            <p>
              WideBeast is a future-focused technology brand building platforms in Web Development, Blockchain, AI
              Systems, and Digital Infrastructure. Our mission is to create scalable, secure, and intelligent digital
              ecosystems for the next generation internet.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
            <ul className="space-y-2">
              <li>MERN Stack, PHP, WordPress</li>
              <li>Android + Flutter Development</li>
              <li>AWS + Hosting + SEO</li>
              <li>Blockchain & Smart Contracts</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Experience Timeline */}
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            role:"Full Stack Developer & Team Lead",
            company:"GasBuddy India",
            time:"2024–Present"
          },{
            role:"Software Developer",
            company:"Anit Infotech",
            time:"2024"
          },{
            role:"Full Stack Developer",
            company:"Veenavani Digital",
            time:"2024"
          },{
            role:"Trainer + Developer",
            company:"IANT",
            time:"2023"
          }].map((job,i)=>(
            <Card key={i}><CardContent className="p-6">
              <h4 className="text-xl font-semibold">{job.role}</h4>
              <p>{job.company}</p>
              <span className="text-sm text-gray-400">{job.time}</span>
            </CardContent></Card>
          ))}
        </div>
      </section>

      {/* GitHub Section */}
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-8 text-center">GitHub Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo)=> (
            <Card key={repo.id}>
              <CardContent className="p-6">
                <h4 className="font-semibold">{repo.name}</h4>
                <p className="text-sm text-gray-400">{repo.description}</p>
                <a href={repo.html_url} target="_blank" className="text-green-400">View Repo</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-8">Certificates</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["IANT Certification","Blockchain Workshop IIT","Star Programming Certificate"].map((c,i)=>(
            <Card key={i}><CardContent className="p-6">{c}</CardContent></Card>
          ))}
        </div>
      </section>

      {/* Blockchain Project */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6">WideBeast Coin</h3>
        <p className="max-w-2xl mx-auto text-gray-400">
          WideBeast Coin is a blockchain ecosystem token designed for Web3 payments, staking, and digital services.
          Built for scalability, transparency, and cross‑platform integration.
        </p>
      </section>

      {/* Contact */}
      <section className="p-10 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p>Email: yashwant5082@gmail.com</p>
        {/* <p>Phone: +91 9868375082</p> */}
        <Button className="mt-4"><Mail className="mr-2"/> Send Message</Button>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 border-t border-green-500 mt-10">
        © {new Date().getFullYear()} WideBeast. All rights reserved.
      </footer>
    </div>
  );
}
