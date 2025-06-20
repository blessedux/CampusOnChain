'use client';

import React, { useRef } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

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
		label: 'Compañía',
		links: [
			{ title: 'Preguntas Frecuentes', href: '/faqs' },
			{ title: 'Sobre Nosotros', href: '/about' },
			{ title: 'Política de Privacidad', href: '/privacy' },
			{ title: 'Términos de Servicio', href: '/terms' },
		],
	},
	{
		label: 'Recursos',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Registro de Cambios', href: '/changelog' },
			{ title: 'Marca', href: '/brand' },
			{ title: 'Ayuda', href: '/help' },
		],
	},
	{
		label: 'Enlaces Sociales',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
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

export function Footer() {
	return (
		<motion.footer
			className="mt-auto w-full flex justify-center bg-[#1a1a1a]"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<div className="w-full md:rounded-t-3xl rounded-t-2xl border-t bg-gradient-to-b from-black to-[#1a1a1a] px-6 py-28 lg:py-36 shadow-xl">
				<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />
				<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
					<AnimatedContainer className="space-y-4">
						<img src="/logos/campus_logo.png" alt="Campus on Chain" className="h-10 w-auto" />
					</AnimatedContainer>
					<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-10 md:mb-0">
									<h3 className="text-xs">{section.label}</h3>
									<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-foreground inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-1 size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
        </div>
      </div>
				<div className="w-full flex justify-center mt-12">
					<p className="text-muted-foreground text-center text-sm bottom-0">
						© {new Date().getFullYear()} Campus On Chain. All rights reserved.
					</p>
          </div>
        </div>
		</motion.footer>
	);
} 