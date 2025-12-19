



export const getUsersHandler = async (req, res) => {
  try {
    // Business logic here (DB, service, etc.)
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" }
    ];

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
