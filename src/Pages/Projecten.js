import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiMaximize2 } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import ScrollReveal from '../Components/ScrollReveal';

// Helper function to dynamically load all images from a folder
function importAll(r) {
    return r.keys().map(r);
}

function Projecten() {
    // 1. Load all images just like your original code
    const project1 = importAll(require.context("../ProjectImages_optimized/Project1", false, /\.(png|jpe?g|svg|webp)$/));
    const project2 = importAll(require.context("../ProjectImages_optimized/Project2", false, /\.(png|jpe?g|svg|webp)$/));
    const project3 = importAll(require.context("../ProjectImages_optimized/Project3", false, /\.(png|jpe?g|svg|webp)$/));
    const project4 = importAll(require.context("../ProjectImages_optimized/Project4", false, /\.(png|jpe?g|svg|webp)$/));
    const project5 = importAll(require.context("../ProjectImages_optimized/Project5", false, /\.(png|jpe?g|svg|webp)$/)); // Kept original mapping

    const projectsData = [
        { id: 0, title: "Voegen te Beerzel", desc: "Bij dit project werkten we een binnenmuur af met steenstrips.", images: project1 },
        { id: 1, title: "Gevelrenovatie te Sint-Katlijne-Waver", desc: "Bekijk hier hoe we van een brouwerij 6 appartementen maakten met behoud van originele gevelzichten.", images: project2 },
        { id: 2, title: "Voegen", desc: "info over dit project", images: project3 },
        { id: 3, title: "Plaatsen van Plinten", desc: "info over dit project", images: project4 },
        { id: 4, title: "Plinten", desc: "info over dit project", images: project5 },
    ];

    const [projectIndexes, setProjectIndexes] = useState(Array(projectsData.length).fill(0));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    const changeImage = (projectIndex, isNext, event) => {
        if (event) event.stopPropagation();
        setProjectIndexes(prev => {
            const newIndexes = [...prev];
            const maxImages = projectsData[projectIndex].images.length;
            if (isNext) {
                newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % maxImages;
            } else {
                newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + maxImages) % maxImages;
            }
            return newIndexes;
        });
    };

    const openModal = (projectIndex) => {
        setCurrentProject(projectIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="projecten" className="scroll-mt-20 bg-white py-20 lg:py-32">
            {/* Modal */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-all duration-300 ${
                    isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <FaTimes
                    className="absolute right-6 top-6 z-10 cursor-pointer text-3xl text-white transition-colors hover:text-gray-300 md:right-12 md:top-12 md:text-4xl"
                    onClick={closeModal}
                />
                <FiChevronLeft
                    className="absolute left-2 z-10 cursor-pointer text-5xl text-white transition-transform hover:scale-110 md:left-8 md:text-7xl"
                    onClick={(e) => changeImage(currentProject, false, e)}
                />
                <FiChevronRight
                    className="absolute right-2 z-10 cursor-pointer text-5xl text-white transition-transform hover:scale-110 md:right-8 md:text-7xl"
                    onClick={(e) => changeImage(currentProject, true, e)}
                />
                <img
                    className={`max-h-[85vh] max-w-[90vw] select-none rounded-2xl object-contain shadow-2xl transition-opacity duration-300 ${
                        isModalOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    src={projectsData[currentProject]?.images[projectIndexes[currentProject]]}
                    alt={`Project ${currentProject}`}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <ScrollReveal className="mb-16 text-center">
                    <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-primary-700">
                        Portfolio
                    </span>
                    <h2 className="font-display text-3xl font-extrabold text-gray-900 md:text-5xl">
                        Onze Realisaties
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Een selectie van onze projecten. Klik op een afbeelding om te vergroten.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                {/* Image Slider */}
                                <div
                                    className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-gray-100"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={project.images[projectIndexes[index]]}
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <div className="rounded-full bg-white p-4 shadow-lg">
                                            <FiMaximize2 className="text-2xl text-primary-700" />
                                        </div>
                                    </div>

                                    {/* Slider Arrows */}
                                    <div
                                        className="absolute left-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 p-2 text-xl text-primary-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                                        onClick={(e) => changeImage(index, false, e)}
                                    >
                                        <FiChevronLeft />
                                    </div>
                                    <div
                                        className="absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 p-2 text-xl text-primary-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                                        onClick={(e) => changeImage(index, true, e)}
                                    >
                                        <FiChevronRight />
                                    </div>

                                    {/* Counter badge */}
                                    <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                        {projectIndexes[index] + 1} / {project.images.length}
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600">{project.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projecten;
