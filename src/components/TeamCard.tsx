import { Linkedin, Github, Twitter } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  };

  return (
    <div className="group bg-background border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay with bio on hover */}
        <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          {member.bio && (
            <p className="text-sm text-white text-center leading-relaxed">
              {member.bio}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {member.name}
        </h3>

        <p className="text-accent font-medium text-sm mb-3">
          {member.position}
        </p>

        <p className="text-xs font-medium text-muted-foreground mb-4 inline-block px-3 py-1 bg-gray-100 rounded-full">
          {member.specialty}
        </p>

        {/* Social Links */}
        {member.socialLinks.length > 0 && (
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            {member.socialLinks.map((link) => {
              const IconComponent = socialIcons[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent hover:bg-gray-100 rounded-lg transition-all duration-200"
                  title={link.platform}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
