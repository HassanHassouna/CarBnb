"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Chen",
          last_name: "Azulai",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C5603AQG0D1CPc8VVIQ/profile-displayphoto-shrink_400_400/0/1582954037166?e=1665014400&v=beta&t=BXVuff4PMq7rHKZxy4VEjQB1YK7SYSks6xUB4EArckg`,
          email: "chenazulay89@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Hassan",
          last_name: "Hassouna",
          profile_picture: `https://media-exp1.licdn.com/dms/image/D4D35AQHCG9AOuB6MAw/profile-framedphoto-shrink_400_400/0/1631017959526?e=1660057200&v=beta&t=ohhKBiGWqi0xUQNUzCuYSAUqxYQyAkn5mNqa3rO6IpA`,
          email: "hhasona@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Roni",
          last_name: "Ben simon",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQEe-dUpOmUDgg/profile-displayphoto-shrink_400_400/0/1623751762767?e=1665014400&v=beta&t=nomV33m2pSkNL0fv6u1UTALuplW7X7nTZdOVt6veJpw`,
          email: "roniana11@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Yuval",
          last_name: "Bader",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQE0B_33DAqe9g/profile-displayphoto-shrink_400_400/0/1641799636788?e=1665014400&v=beta&t=bPqN_OLxYNjYVdYCyQNyQCdnK6PVItnKfGSJH_ARvko`,
          email: "yuvalbader96@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "Oron",
          last_name: "Morad",
          profile_picture: `https://media-exp1.licdn.com/dms/image/C4D03AQGXP9o155WTtg/profile-displayphoto-shrink_400_400/0/1643224942359?e=1665014400&v=beta&t=nQbs4xx0x0517al4PAYCdkkcCpKAtFER_B_aWhbFGqo`,
          email: "oron.morad@gmail.com",
          address: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
