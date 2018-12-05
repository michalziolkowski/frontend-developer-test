const getFormattedStringList = (list: string[]): string => {
  const upperCaseList = list.map(
    (value: string) => value.charAt(0).toUpperCase() + value.slice(1)
  );
  return upperCaseList.join(", ");
};

export default { getFormattedStringList };
