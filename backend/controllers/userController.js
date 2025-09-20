exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  // Dummy auth
  if (email === "test@example.com" && password === "password") {
    return res.json({ token: "fake-jwt-token" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
};
