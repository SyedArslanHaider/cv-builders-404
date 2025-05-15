const generateCv = (req, res) => {
  const { fullName, email, phone, github, linkedin, portfolio } = req.body;

  if (!fullName || !email || !phone || !github || !portfolio || !linkedin) {
    return res.status(400).json({ msg: 'All fields are required' });
  }
  const cvData = {
    fullName,
    contact: {
      email,
      phone,
      linkedin,
      github,
      portfolio,
    },
  };
  res.status(200).json({ msg: 'CV generated successfully', CV: cvData });
};

export default generateCv;
