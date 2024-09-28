import React, { createContext, useRef, RefObject, useState, useEffect } from 'react';

export type NavigationContextValues = {
	homeRef: RefObject<HTMLDivElement>;
	aboutRef: RefObject<HTMLDivElement>;
	contactRef: RefObject<HTMLDivElement>;
	skillsRef: RefObject<HTMLDivElement>;
	projectsRef: RefObject<HTMLDivElement>;
	activeSection: string;
	scrollToSection: (section: string) => void;
};

export const NavigationContext = createContext<NavigationContextValues | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const [activeSection, setActiveSection] = useState<string>('home');

	const scrollToSection = (section: string): void => {
		const refs: { [key: string]: RefObject<HTMLDivElement> } = {
			home: homeRef,
			about: aboutRef,
			contact: contactRef,
			skills: skillsRef,
			projects: projectsRef,
		};
		const ref = refs[section];
		if (ref && ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
		setActiveSection(section);
	};

	useEffect(() => {
		const handleScroll = () => {
			//const scrollPosition = window.scrollY + window.innerHeight / 2;
			const sections = [
				{ name: 'home', ref: homeRef },
				{ name: 'about', ref: aboutRef },
				{ name: 'contact', ref: contactRef },
				{ name: 'skills', ref: skillsRef },
				{ name: 'projects', ref: projectsRef },
			];

			for (const section of sections) {
				const element = section.ref.current;
				if (element) {
					const { top, bottom } = element.getBoundingClientRect();
					if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
						setActiveSection(section.name);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const contextValue: NavigationContextValues = {
		homeRef,
		aboutRef,
		contactRef,
		skillsRef,
		projectsRef,
		activeSection,
		scrollToSection,
	};

	return <NavigationContext.Provider value={contextValue}>{children}</NavigationContext.Provider>;
};
