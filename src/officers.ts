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
        image: "/assets/images/headshots/maresa_headshot.jpg",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/victoria-ramos-96bb71418/?skipRedirect=true",
        bio: "\"SHPE means familia and growth. It's helped me form lifelong friendships and shaped my professional journey as an engineer.\""
    }, 
    {
        name: "Haily Montenegro",
        gradYear: "2026",
        major: "Electrical Engineering",
        position: "Vice President",
        image: "/assets/images/headshots/edwin_headshot.jpg",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/edwinvazquez1/",
        bio: "\"To me, SHPE is where I found community, friendship, and growth both academically and professionally. I came in not knowing what SHPE was, but now I can’t imagine college without it; SHPE truly feels like my familia.\""
    },  
    {
        name: "Linda Carillo",
        gradYear: "2026",
        major: "Electrical Engineering",
        position: "External Affairs Executive",
        image: "/assets/images/headshots/alberto_headshot.jpg",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/albertorodrigueztxst/",
        bio: "\"In SHPE, I found the tools to grow as a leader, the people to rise with as a community, and the purpose to keep pushing forward; not just for myself, but for those coming after me.\""
    },
    {
        name: "Lilly Gomez",
        gradYear: "2026",
        major: "Industrial Engineering",
        position: "Internal Affairs Executive",
        image: "/assets/images/headshots/jimena_headshot.jpg",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/jimenagonzalez21/",
        bio: "\"SHPE means to me, turning dreams into action alongside people who understand my journey. It's a commitment to lift others as we rise together. \""
    },
    {
        name: "Pierre Picazo",
        gradYear: "2026",
        major: "Computer Science",
        position: "Treasurer",
        image: "/assets/images/headshots/jorge_headshot.jpg",
        group: "Executive Board",
        linkedin: "https://www.linkedin.com/in/jorgejimgonz/",
        bio: "\"Through SHPE, I found mentors, friends, and a community that made me feel like I belong while pushing me to become the best version of myself.\""
    },
    {
        name: "James Tanner",
        gradYear: "2026",
        major: "Computer Science",
        position: "Co-Director of Media",
        image: "/assets/images/headshots/justin_headshot2.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/justinvillasenor/",
        bio: "\"SHPE has been the familia I never knew I needed — a space where I’ve grown as a leader, a student, and a person. I’ve found a community that’s helped me step into amazing opportunities.\""
    },  
    {
        name: "Diego Perez",
        gradYear: "2027",
        major: "Manufacturing Engineering",
        position: "Director of Events",
        image: "/assets/images/headshots/linda_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/linda-carrillo-moran/",
        bio: "\"SHPE is opportunity, growth, and familia— a community where meaningful connections are built through the service we do together. \""
    },  
    {
        name: "Adrian Hackett",
        gradYear: "2029",
        major: "Electrical Engineering",
        position: "Director of Technology",
        image: "/assets/images/headshots/thomas_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/thomasadeelmendoza/",
        bio: "\"SHPE to me means familia, I wouldn’t be where I am without them and I strive to always make them proud.\""
    },
    {
        name: "Vicente Chavez",
        gradYear: "2026",
        major: "Marketing",
        position: "Co-Director of Media",
        image: "/assets/images/headshots/emily_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/emily--barrera/",
        bio: "\"SHPE has inspired me to think bigger for my future and that anything is possible with a great community around you! \""
    },
    {
        name: "Joaquin Valeriano",
        gradYear: "2026",
        major: "Electrical Engineering",
        position: "Co-Director of Athletics",
        image: "/assets/images/headshots/aiden_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/aiden-olivarez-81b5512ab/",
        bio: "\"I feel truly blessed to be apart of SHPE, a community that has welcomed me with open arms and connected me with others who share similar college experiences.\""
    },
    {
        name: "Kiana Monsivais",
        gradYear: "2026",
        major: "Civil Engineering",
        position: "Co-Director of Athletics",
        image: "/assets/images/headshots/yaneli_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/yan-aguilar03/",
        bio: "\"For me, SHPE means family and culture, it’s a place where students come together and create a welcoming community.\""
    },
    {
        name: "Sebastian Hernandez",
        gradYear: "2027",
        major: "Computer Science",
        position: "Director of Events Assistant",
        image: "/assets/images/headshots/dalton_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/dalton-krawczynski-542642303/",
        bio: "\"To me, SHPE is proof that when you combine community, culture, and code, you compile innovation everyone can run with.\""
    },
    {
        name: "Fidel Rocha Loza",
        gradYear: "2027",
        major: "Electrical Engineering",
        position: "Treasurer Assistant",
        image: "/assets/images/headshots/ivan_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/ivan-martinez-4068042b4/",
        bio: "\"For me, SHPE means uplifting and supporting one another out of a shared desire to make an impact for hispanics in STEM\""
    },
    {
        name: "Alexsandra Luna Gonzalez",
        gradYear: "2027",
        major: "Civil Engineering",
        position: "Director of SHPEtinas",
        image: "/assets/images/headshots/dani_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/danielle-legarda/",
        bio: "\"To me, SHPE is where I found people who understand my goals, challenges, and background. It gave me the confidence to pursue engineering, grow as a leader, and feel supported by a family-like community.\""
    },
    {
        name: "Samantha Conejo",
        gradYear: "2027",
        major: "Computer Science",
        position: "External Affairs Executive Assistant",
        image: "/assets/images/headshots/santi_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/santiago-rubio-bolanos/",
        bio: "\"To me, SHPE is more than a professional organization .It’s a familia that empowers, supports, and pushes me to grow in every way.\""
    },
    {
        name: "Sarai Prieto",
        gradYear: "2028",
        major: "Civil Engineering",
        position: "Director of SHPEtinas",
        image: "/assets/images/headshots/sarai_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/michelle-alvarez-prieto-09089826a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        bio: "\"To me, SHPE means finding strength in community—being surrounded by people who understand my struggles and push me to become the version of myself I never thought I could be.\""
    },
    {
        name: "Ingrid Santos",
        gradYear: "2028",
        major: "Civil Engineering",
        position: "SHPEtinas Assistant",
        image: "/assets/images/headshots/ingrid_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/ingrid-santos-mederos-62960a308/",
        bio: "\"SHPE to me means learning how to empower my community and myself through Stem.\""
    },
    {
        name: "Angel Gonzalez",
        gradYear: "2026",
        major: "Mechanical Engineering",
        position: "Membership Director",
        image: "/assets/images/headshots/angel_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/angel-gonzalez-350605337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        bio: "\To me, SHPE is a lot more than a professional organization! It feels like a family that empowers you to grow and helps embrace development as a leader.\""
    },
    {
        name: "Cristian Vizcaya",
        gradYear: "2027",
        major: "Civil Engineering",
        position: "Director of Fundraising",
        image: "/assets/images/headshots/victoria_headshot.jpg",
        group: "Board of Directors",
        linkedin: "http://www.linkedin.com/in/victoria-ramos-2431b0362",
        bio: "\"To me, SHPE means community that supports and pushes you to grow out of your comfort zone.\""
    },
    {
        name: "Junior Segura",
        gradYear: "2026",
        major: "Manufacturing Engineering",
        position: "Director of Information",
        image: "/assets/images/headshots/junior_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/junior-segura-ontiveros-117a4a29a/",
        bio: "\"SHPE is a welcoming community and a home far from home full of opportunities to grow.\""
    }, 
    {
        name: "Angelica Fernandez",
        gradYear: "2026",
        major: "Computer Science",
        position: "Director of Chapter Development",
        image: "/assets/images/headshots/aldo_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/aldo-guerrero-75289a262/",
        bio: "\"SHPE is a reminder that a group of ambitious strangers can become a familia, and grow not only professionally, but personally as well. \""
    },
    {
        name: "Eladio Gonzalez",
        gradYear: "2026",
        major: "Electrical Engineering",
        position: "Director of Fundraising Assistant",
        image: "/assets/images/headshots/javi_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/javier-garcia-9478292b6/",
        bio: "\"SHPE means embracing a community where culture, resilience, and innovation come together to empower Latinos in STEM. It’s about lifting each other up and proving that our heritage is our strength.\""
    },
    {
        name: "Alondra Chairez",
        gradYear: "2028",
        major: "Civil Engineering",
        position: "Membership Assistant",
        image: "/assets/images/headshots/alondra_headshot.jpg",
        group: "Board of Directors",
        linkedin: "https://www.linkedin.com/in/alondra-chairez-632601330/",
        bio: "\"To me, SHPE means community and empowerment. As a Hispanic in STEM, being surrounded by people who understand my journey, and who uplift and guide me, has been incredibly meaningful.\""
    },
]

const executiveBoard = officers.filter(o => o.group === "Executive Board");
const boardOfDirectors = officers.filter(o => o.group === "Board of Directors");