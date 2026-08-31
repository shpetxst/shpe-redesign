export interface Officer {
    name: string;
    gradYear: string;
    major: string;
    position: string;
    image: string;
    group: "Executive Board" | "Board of Directors";
    linkedin?: string;
    bio?: string;
}

export const officers: Officer[] = [
    {
        name: "Victoria Ramos",
        gradYear: "2028",
        major: "Civil Engineering",
        position: "President",
        image: "/Headshots2627/Victoria.JPG",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/victoria-ramos-96bb71418/",
        bio: "\"SHPE means familia and growth. It's helped me form lifelong friendships and shaped my professional journey as an engineer.\""
    }, 
    {
        name: "Haily Montenegro",
        gradYear: "2027",
        major: "Industrial Engineering",
        position: "Vice President",
        image: "/Headshots2627/Haily.JPG",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/haily-montenegro/",
        bio: "\"To me, SHPE is where I found community, friendship, and growth both academically and professionally. I came in not knowing what SHPE was, but now I can’t imagine college without it; SHPE truly feels like my familia.\""
    },  
    {
        name: "Linda Carillo",
        gradYear: "2027",
        major: "Manufacturing Engineering",
        position: "External Affairs Executive",
        image: "/Headshots2627/Linda.JPG",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/linda-carrillo-moran/",
        bio: "\"In SHPE, I found the tools to grow as a leader, the people to rise with as a community, and the purpose to keep pushing forward; not just for myself, but for those coming after me.\""
    },
    {
        name: "Lilly Gomez",
        gradYear: "2027",
        major: "Civil Engineering",
        position: "Internal Affairs Executive",
        image: "/Headshots2627/Lilly.JPEG",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/lilly-gomez-ce/",
        bio: "\"SHPE means to me, turning dreams into action alongside people who understand my journey. It's a commitment to lift others as we rise together. \""
    },
    {
        name: "Pierre Picazo",
        gradYear: "2028",
        major: "Mechanical Engineering",
        position: "Treasurer",
        image: "/Headshots2627/Pierre Picazo.JPG",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/pierre-picazo-2698633015342958bh/",
        bio: "\"Through SHPE, I found mentors, friends, and a community that made me feel like I belong while pushing me to become the best version of myself.\""
    },
    {
        name: "James Tanner",
        gradYear: "2027",
        major: "Mechanical Engineering",
        position: "Co-Director of Media",
        image: "/Headshots2627/James_NEW.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/jtanner05/",
        bio: "\"SHPE has been the familia I never knew I needed — a space where I’ve grown as a leader, a student, and a person. I’ve found a community that’s helped me step into amazing opportunities.\""
    },  
    {
        name: "Diego Perez",
        gradYear: "2029",
        major: "Civil Engineering",
        position: "Director of Events",
        image: "/Headshots2627/Diego.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/diegoperez07/",
        bio: "\"Familia goes beyond those in it. The collective comfort and connection you feel within a familia is what stands out to me, and SHPE is where I found that in my first year at Texas State. Finding a home within SHPE has allowed me to grow as a leader, academically and professionally.\""
    },  
    {
        name: "Adrian Hackett",
        gradYear: "2029",
        major: "Electrical Engineering",
        position: "Director of Technology",
        image: "/Headshots2627/Adrian_NEW.png",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/adrian-hackett-6788b3382/",
        bio: "\"SHPE to me means familia, I wouldn’t be where I am without them and I strive to always make them proud.\""
    },
    {
        name: "Vicente Chavez",
        gradYear: "2027",
        major: "Mechanical Engineering",
        position: "Co-Director of Media",
        image: "/Headshots2627/Vicente_NEW.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/emily--barrera/",
        bio: "\"Familia means supporting one another and wanting to see everyone succeed\""
    },
    {
        name: "Joaquin Valeriano",
        gradYear: "2027",
        major: "Electrical Engineering",
        position: "Co-Director of Athletics",
        image: "/Headshots2627/Joaquin.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/joaquin-valeriano-7669963b1/",
        bio: "\"I feel truly blessed to be apart of SHPE, a community that has welcomed me with open arms and connected me with others who share similar college experiences.\""
    },
    {
        name: "Kiana Monsivais",
        gradYear: "2027",
        major: "Electrical Engineering",
        position: "Co-Director of Athletics",
        image: "/Headshots2627/Kiana.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/kiana-monsivais-849a03394/",
        bio: "\"For me, SHPE means family and culture, it’s a place where students come together and create a welcoming community.\""
    },
    {
        name: "Sebastian Hernandez",
        gradYear: "2029",
        major: "Civil Engineering",
        position: "Director of Events Assistant",
        image: "/Headshots2627/Sebastian.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/sebastian-i-hernandez/",
        bio: "\"For me, familia is a bond that goes deeper than friendship. It means showing up for each other, creating memories, sharing good laughs, and knowing that no matter what happens, you have a solid group of people who always have your back.\""
    },
    {
        name: "Fidel Rocha Loza",
        gradYear: "2028",
        major: "Computer Science",
        position: "Treasurer Assistant",
        image: "/Headshots2627/Fidel.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/fidel-rocha/",
        bio: "\"For me, SHPE means uplifting and supporting one another out of a shared desire to make an impact for hispanics in STEM\""
    },
    {
        name: "Alexsandra Luna Gonzalez",
        gradYear: "2027",
        major: "Manufacturing Engineering",
        position: "Director of SHPEtinas",
        image: "/Headshots2627/Alexsandra.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/alexsandralunagonzalez3647/",
        bio: "\"To me, SHPE is where I found people who understand my goals, challenges, and background. It gave me the confidence to pursue engineering, grow as a leader, and feel supported by a family-like community.\""
    },
    {
        name: "Samantha Conejo",
        gradYear: "2027",
        major: "Electrical Engineering",
        position: "External Affairs Executive Assistant",
        image: "/Headshots2627/Samantha.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/samantha-conejo/",
        bio: "\"To me, SHPE is more than a professional organization .It’s a familia that empowers, supports, and pushes me to grow in every way.\""
    },
    {
        name: "Cristian Vizcaya",
        gradYear: "2027",
        major: "Mechanical Engineering",
        position: "Director of Fundraising",
        image: "/Headshots2627/Cristian_NEW.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/cristian-vizcaya/",
        bio: "\"To me, SHPE means community that supports and pushes you to grow out of your comfort zone.\""
    },
    {
        name: "Angelica Fernandez",
        gradYear: "2028",
        major: "Industrial Engineering",
        position: "Director of Chapter Development",
        image: "/Headshots2627/Angelica.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/angelicafg1003/",
        bio: "\"SHPE is a reminder that a group of ambitious strangers can become a familia, and grow not only professionally, but personally as well. \""
    },
    {
        name: "Eladio Gonzalez",
        gradYear: "2027",
        major: "Computer Science",
        position: "Director of Fundraising Assistant",
        image: "/Headshots2627/Eladio.JPG",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/eladio-gonzalez-6511963b3/",
        bio: "\"SHPE means embracing a community where culture, resilience, and innovation come together to empower Latinos in STEM. It’s about lifting each other up and proving that our heritage is our strength.\""
    },
]

const executiveBoard = officers.filter(o => o.group === "Executive Board");
const boardOfDirectors = officers.filter(o => o.group === "Board of Directors");