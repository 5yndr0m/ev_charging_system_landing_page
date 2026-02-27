import TeamSection from "@/components/about/team-section"
import TimelineSection from "@/components/about/timeline-section"
import VisionSection from "@/components/about/vision-section"

export default function AboutPage() {
  return (
    <div className="pt-16">
      <VisionSection />
      <TeamSection />
      <TimelineSection />
    </div>
  )
}
