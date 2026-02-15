import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiMaximize2 } from "react-icons/fi";
import { FaTimes } from 'react-icons/fa';

// Helper function to dynamically load all images from a folder
function importAll(r) {
    return r.keys().map(r);
}

function Projecten() {
    // 1. Load all images just like your original code
    const project1 = importAll(require.context("../ProjectImages/Project1", false, /\.(png|jpe?g|svg)$/));
    const project2 = importAll(require.context("../ProjectImages/Project2", false, /\.(png|jpe?g|svg)$/));
    const project3 = importAll(require.context("../ProjectImages/Project3", false, /\.(png|jpe?g|svg)$/));
    const project4 = importAll(require.context("../ProjectImages/Project4", false, /\.(png|jpe?g|svg)$/));
    const project5 = importAll(require.context("../ProjectImages/Project1", false, /\.(png|jpe?g|svg)$/)); // Kept original mapping

    // 2. We consolidate all projects into a clean array. So much easier to manage!
    const projectsData = [
        { id: 0, title: "Voegen te Beerzel", desc: "Bij dit project werkten we een binnenmuur af met steenstrips.", images: project1 },
        { id: 1, title: "Gevelrenovatie te Sint-Katlijne-Waver", desc: "Bekijk hier hoe we van een brouwerij 6 appartementen maakten met behoud van originele gevelzichten.", images: project2 },
        { id: 2, title: "voegen3", desc: "info over dit project", images: project3 },
        { id: 3, title: "Plaatsen van Plinten", desc: "info over dit project", images: project4 },
        { id: 4, title: "voegen5", desc: "info over dit project", images: project5 },
    ];

    // 3. State Management
    const [projectIndexes, setProjectIndexes] = useState(Array(projectsData.length).fill(0));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(0);

    // Function to handle clicking next/prev arrows
    const changeImage = (projectIndex, isNext, event) => {
        // This stops the click from "bubbling up" and accidentally opening the modal
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

    // Modal Controls
    const openModal = (projectIndex) => {
        setCurrentProject(projectIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex min-h-[90vh] flex-col items-center bg-gray-50 pb-20 pt-10">

            {/* FULL SCREEN MODAL */}
            <div
                className={`fixed inset-0 z-[50000] flex items-center justify-center bg-black/95 transition-all duration-500 ${
                    isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Close Button */}
                <FaTimes
                    className="absolute right-6 top-6 cursor-pointer text-4xl text-white transition-colors hover:text-gray-300 md:right-12 md:top-12 md:text-5xl"
                    onClick={closeModal}
                />

                {/* Modal Arrows */}
                <FiChevronLeft
                    className="absolute left-4 cursor-pointer text-6xl text-white transition-transform hover:scale-110 md:left-10 md:text-8xl"
                    onClick={(e) => changeImage(currentProject, false, e)}
                />
                <FiChevronRight
                    className="absolute right-4 cursor-pointer text-6xl text-white transition-transform hover:scale-110 md:right-10 md:text-8xl"
                    onClick={(e) => changeImage(currentProject, true, e)}
                />

                {/* Modal Image */}
                <img
                    className="max-h-[85vh] max-w-[85vw] select-none rounded-xl object-contain shadow-2xl"
                    src={projectsData[currentProject].images[projectIndexes[currentProject]]}
                    alt={`Project ${currentProject} Vergoot`}
                />
            </div>

            {/* MAIN PAGE CONTENT */}
            <div className="mx-auto w-[95%] max-w-[1600px] px-4 lg:px-10">
                <h1 className="mb-10 text-4xl font-extrabold uppercase tracking-tight text-[#2e0747] md:text-5xl lg:mb-16">
                    Onze Realisaties
                </h1>

                {/* Grid Container for Project Cards */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {/* We map over our projects array to automatically generate the cards! */}
                    {projectsData.map((project, index) => (
                        <div key={project.id} className="group flex flex-col overflow-hidden rounded-2xl border-t-4 border-[#2e0747] bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">

                            {/* Image Slider Section */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200" onClick={() => openModal(index)}>

                                {/* The active image */}
                                <img
                                    className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={project.images[projectIndexes[index]]}
                                    alt={project.title}
                                />

                                {/* Maximize Overlay on Hover */}
                                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[#2e0747]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="rounded-full bg-white p-4 shadow-lg">
                                        <FiMaximize2 className="text-3xl text-[#2e0747]" />
                                    </div>
                                </div>

                                {/* Slider Arrows */}
                                <div
                                    className="absolute left-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 p-2 text-2xl text-[#2e0747] shadow-md transition-colors hover:bg-white"
                                    onClick={(e) => changeImage(index, false, e)}
                                >
                                    <FiChevronLeft />
                                </div>
                                <div
                                    className="absolute right-2 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 p-2 text-2xl text-[#2e0747] shadow-md transition-colors hover:bg-white"
                                    onClick={(e) => changeImage(index, true, e)}
                                >
                                    <FiChevronRight />
                                </div>
                            </div>

                            {/* Text Info Section */}
                            <div className="flex flex-col p-6">
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <h2 className="text-xl font-bold text-[#2e0747] line-clamp-2">
                                        {project.title}
                                    </h2>
                                    <span className="flex-shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500">
                                        {projectIndexes[index] + 1} / {project.images.length}
                                    </span>
                                </div>
                                <p className="text-gray-600 line-clamp-3">
                                    {project.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projecten;