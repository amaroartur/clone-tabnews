function status(request, response) {
  response
    .status(200)
    .json({ status: "Success" });
}

export default status;
