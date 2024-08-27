const UpdatedTime = () => {
  const now = new Date();
  const lastDayOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  const formattedDate = lastDayOfPrevMonth.toISOString().split("T")[0]; // Formats to 'YYYY-MM-DD'
  return `${formattedDate} updated`;
};

export default UpdatedTime;
