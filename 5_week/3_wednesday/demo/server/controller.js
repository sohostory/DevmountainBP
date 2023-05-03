// Simulated logged in user Fern
const userId = 4;
const clientId = 3;

require("dotenv").config();

const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getUserInfo: (req, res) => {
    sequelize
      .query(
        `
            SELECT *
            FROM cc_clients AS c
                JOIN cc_users AS u 
                    ON c.user_id = u.user_id
            WHERE u.user_id = ${userId}
            `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]));
  },
  updateUserInfo: (req, res) => {
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      city,
      state,
      zipCode,
    } = req.body;

    let query = `
        UPDATE cc_users
        SET 
            first_name = '${firstName}',
            last_name = '${lastName}',
            phone_number = ${phoneNumber},
            email = '${email}'
        WHERE user_id = ${userId};

        UPDATE cc_clients
        SET
            address = '${address}',
            city = '${city}',
            state = '${state}',
            zip_code = ${zipCode}
        WHERE user_id = ${userId};
    `;
    sequelize
      .query(query)
      .then((dbRes) => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  getUserAppt: (req, res) => {
    let query = `
        SELECT *
        FROM cc_appointments
        WHERE client_id = ${clientId}
        ORDER BY date DESC`;

    sequelize
      .query(query)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  requestAppointment: (req, res) => {
    const { date, service } = req.body;
    const query = `
        INSERT INTO cc_appointments (client_id, date, service_type, approved, completed)
        VALUES (${clientId}, '${date}', '${service}', false, false)
        returning *;
    `;

    sequelize
      .query(query)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
};
