'use client';

import React, { useRef } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

// Custom Telegram Icon Component
const TelegramIcon = ({ className }: { className?: string }) => (
	<svg 
		className={className} 
		viewBox="0 0 24 24" 
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
	</svg>
);

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Secciones',
		links: [
			{ title: 'Inicio', href: '#hero' },
			{ title: 'Sobre Nosotros', href: '#about' },
			{ title: 'Equipo', href: '#team' },
			{ title: 'Características', href: '#features' },
			{ title: 'Roadmap', href: '#roadmap' },
		],
	},
	{
		label: 'Recursos',
		links: [
			{ title: 'Blog', href: '#' },
			{ title: 'Registro de Cambios', href: '#' },
			{ title: 'Marca', href: '#' },
			{ title: 'Ayuda', href: '#' },
		],
	},
	{
		label: 'Redes Sociales',
		links: [
			{ title: 'Instagram', href: 'https://instagram.com/campusonchain', icon: Instagram },
			{ title: 'X (Twitter)', href: 'https://twitter.com/campusonchain', icon: Twitter },
			{ title: 'LinkedIn', href: 'https://linkedin.com/company/campusonchain', icon: Linkedin },
			{ title: 'Telegram', href: 'https://t.me/campusonchain', icon: TelegramIcon },
		],
	},
];

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

  return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		const offset = 80; // Account for header height
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;
		
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
};

export function Footer() {
	return (
		<motion.footer
			className="mt-auto w-full flex justify-center bg-[#1a1a1a]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="w-full md:rounded-t-3xl rounded-t-2xl border-t bg-gradient-to-b from-black to-[#1a1a1a] px-6 py-20 lg:py-24 shadow-xl">
				<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
				<div className="flex flex-col lg:flex-row items-start justify-between gap-12">
					{/* Left Side - Campus on Chain Logo */}
					<AnimatedContainer className="flex-shrink-0">
						<div className="space-y-4">
							<button 
								onClick={() => scrollToSection('hero')}
								className="hover:opacity-80 transition-opacity duration-300"
							>
								<img src="/logos/campus_logo.png" alt="Campus on Chain" className="h-24 w-auto" />
							</button>
							<p className="text-muted-foreground text-sm max-w-xs">
								La plataforma definitiva para estudiantes y builders del ecosistema blockchain.
							</p>
						</div>
					</AnimatedContainer>
					
					{/* Right Side - Navigation Columns */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full lg:w-auto">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="space-y-4">
									<h3 className="text-sm font-semibold text-white">{section.label}</h3>
									<ul className="text-muted-foreground space-y-2 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												{link.href === '#' ? (
													<span className="hover:text-foreground inline-flex items-center transition-all duration-300 cursor-default">
														{link.title}
													</span>
												) : link.href.startsWith('#') ? (
													<button
														onClick={() => scrollToSection(link.href.replace('#', ''))}
														className="hover:text-foreground inline-flex items-center transition-all duration-300 text-left"
													>
														{link.icon && <link.icon className="me-1 size-4" />}
														{link.title}
													</button>
												) : (
													<a
														href={link.href}
														target={link.href.startsWith('http') ? '_blank' : '_self'}
														rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
														className="hover:text-foreground inline-flex items-center transition-all duration-300"
													>
														{link.icon && <link.icon className="me-1 size-4" />}
														{link.title}
													</a>
												)}
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>
				<div className="w-full flex justify-center pt-4">
					<p className="text-muted-foreground text-center text-sm">
						© {new Date().getFullYear()} Campus On Chain. All rights reserved.
					</p>
				</div>
			</div>
		</motion.footer>
	);
} 