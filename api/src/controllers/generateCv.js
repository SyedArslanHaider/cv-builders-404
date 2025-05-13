const generateCv = (req, res) => {
  const {
    name,
    email,
    contact,
    linkedin,
    professional_summary,
    skills,
    experience,
    projects,
    education,
    languages,
    volunteer_work,
  } = req.body;

  if (
    !name ||
    !email ||
    !contact ||
    !linkedin ||
    !professional_summary ||
    !skills ||
    !experience ||
    !projects ||
    !education ||
    !languages ||
    !volunteer_work
  ) {
    return res.status(400).json({ msg: 'All fields are required' });
  }
  const cvData = {
    name,
    contact: {
      email,
      contact,
      linkedin,
    },
    professional_summary,
    skills: {
      technical: skills?.technical || [],
      transferable: skills?.transferable || [],
    },
    experience: experience || [],
    projects: projects || [],
    education: education || [],
    languages: languages || [],
    volunteer_work: volunteer_work || [],
  };
  res.status(200).json({ msg: 'CV generated successfully', CV: cvData });
};

export default generateCv;
