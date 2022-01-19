const pool = require("../configs/connectDB");
// const multer = require('multer');

let getHomePage = async (req, res) => {
  let data = [];

  // connection.query(
  //     'SELECT * FROM `users` ',
  //     function(err, results, fields) {
  //       data = results;
  // console.log(data);
  // return res.render('index.ejs', {dataUsers: data});
  //     }
  //   );

  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", {
    dataUsers: rows,
  });
  // console.log(rows)
};

let getDetailPage = async (req, res) => {
  let id = req.params.id;
  let [user, fields] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [
    id,
  ]);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  // console.log(req.body);
  let { firstName, lastName, email, address } = req.body;
  await pool.execute(
    `INSERT INTO users(firstName, lastName, email, address) VALUES (?, ? , ?, ?) `,
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

let deleteUser = async (req, res) => {
  let id = req.body.id;
  await pool.execute(`DELETE FROM users WHERE id = ?`, [id]);
  return res.redirect("/");
};

let editUser = async (req, res) => {
  let id = req.params.id;
  let [user, fields] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [
    id,
  ]);
  return res.render("update.ejs", {
    dataUser: user[0],
  });
};

let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    `UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?`,
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

let uploadFile = async (req, res) => {
  return res.render("uploadFile.ejs");
};

let File = async (req, res) => {
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (!req.file) {
    return res.send("Please select an image to upload");
  }
  // Display uploaded image for user validation
  res.send(
    `You have uploaded this image: <hr/><img src="/images/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`
  );
  // });
};

let uploadMultiple = async (req, res) => {
  const files = req.files;
  let index, len;
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  } else if (req.files.length === 0) {
    return res.send("Please select an image to upload");
  }
  let result = "You have uploaded these images: <hr />";
  // Loop through all the uploaded images and display them on frontend
  for (index = 0, len = files.length; index < len; ++index) {
    result += `<img src="/images/${files[index].filename}" width="300" style="margin-right: 20px;">`;
  }
  result += '<hr/><a href="/upload">Upload more images</a>';
  res.send(result);
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  deleteUser,
  editUser,
  updateUser,
  uploadFile,
  File,
  uploadMultiple,
};
