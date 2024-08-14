export async function getTechData() {
  const response = await axios.get('http://localhost:3000/tech');
  return response.data;
}

export async function getDesignData() {
  const response = await axios.get('http://localhost:3000/design');
  return response.data;
}

export async function getData() {
  const techData = await getTechData();
  const designData = await getDesignData();
  return { tech: techData, design: designData };
}
