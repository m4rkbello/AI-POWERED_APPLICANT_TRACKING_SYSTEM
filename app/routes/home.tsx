import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AIPATS BY M4RKBELLO" },
    { name: "description", content: "Smart Feedback For Your Dream Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Ratings!</h1>
        <h2>Review your  submissions and check  AI-Powered feedback.</h2>
      </div>
    </section>


    {resumes.length > 0 && (
      <div className="resumes-section">
        {/* map display */}
        {resumes.map((resume: Resume, index: number) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )

    }




  </main>;
}
