import React from "react";
import ClientsCard from "./ClientsCard";

function Clients() {
  const message = [
    "Muhammad Noman ability to turn complex ideas into beautiful, intuitive designs is unmatched. He built a fast, responsive website that perfectly captures our brand essence. Highly recommended!",
    "Working with Muhammad Noman was a pleasure. His React.js skills were invaluable in creating a dynamic, user-friendly site that has significantly improved our conversion rates",
    "Muhammad Noman consistently delivers on time and with exceptional quality. His expertise in frontend development helped us create an engaging and smooth user experience for our clients",
    "Muhammad Noman transformed our website with modern design principles and efficient coding. His attention to detail and focus on performance have made our site faster and more engaging",
  ];
  const stars = [
    <i key={1} className="fas fa-star"></i>,
    <i key={2} className="fas fa-star"></i>,
    <i key={3} className="fas fa-star"></i>,
    <i key={4} className="fas fa-star"></i>,
    <i key={5} className="fas fa-star"></i>,
  ];

  // const images = [

  // ]
  return (
    <section id="clients">
      <ClientsCard
        clientName="Noor Muhammad Khan"
        post="Founder and CEO, Apex Tech"
        starNumber="5.0"
        starIcon={stars}
        message={message[0]}
      />
      <ClientsCard
        clientName="David Miller"
        post="Owner, Innovative Web Solutions"
        starNumber="5.0"
        starIcon={stars}
        message={message[1]}
      />
      <ClientsCard
        clientName="Chris Thompson"
        post="Director of Operations, Elite Digital"
        starNumber="5.0"
        starIcon={stars}
        message={message[2]}
      />
      <ClientsCard
        clientName="Daniel Roberts"
        post="Marketing Manager, Creative Technologies"
        starNumber="5.0"
        starIcon={stars}
        message={message[3]}
      />
    </section>
  );
}

export default Clients;
