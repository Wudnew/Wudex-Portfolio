import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
    {
      imgSrc: '/images/youtube.JPG',
      title: 'Full stack Youtube Clone',
      tags: ['API', 'Development'],
      projectLink: 'https://youtube-clone-lake-phi.vercel.app/'
    },
    {
      imgSrc: '/images/realstate.JPG',
      title: 'Real State  app',
      tags: ['Development', 'wed design'],
      projectLink: 'https://real-estate-ochre-tau.vercel.app/'
    },
    {
      imgSrc: '/images/netflix.JPG',
      title: 'Netflix Clone',
      tags: ['Development', 'API'],
      projectLink: 'https://netflix-clone-pi-henna.vercel.app/'
    },
    {
      imgSrc: '/images/portfolio.JPG',
      title: 'My portfolio website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Wudnew/myportfolio'
    },
    {
      imgSrc: '/images/food.png',
      title: 'Food Delivery website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/Wudnew/Full-Stack-Food-Delivery-using-MERN-stack'
    },
    {
      imgSrc: '/images/spotify.png',
      title: 'Music App Development',
      tags: ['Web-design', 'Development','API'],
      projectLink: 'https://github.com/Wudnew/Full-Stack-Spotify-Clone-with-MERN-Stack'
    },
  ];
function Work() {
  return (
    <section id='work' className='section'>
        <div className='container'>
            <h2 className='headline-2 mb-8'>
                My portfolio highlights
            </h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                {works.map(({imgSrc, title, tags, projectLink}, key)=>(
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
