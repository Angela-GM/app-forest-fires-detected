const currentDate = new Date;
const dateTwoYearsAgo = new Date(currentDate);
dateTwoYearsAgo.setFullYear(currentDate.getFullYear() - 2);  // Restarle dos años
const formatteddateTwoYearsAgo = dateTwoYearsAgo.toISOString().split('T')[0];
export { formatteddateTwoYearsAgo };

