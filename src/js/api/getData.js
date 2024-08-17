export async function getTechData() {
  const response = await axios.get(`${process.env.API_URL}/tech`);
  return response.data;
}

export async function getDesignData() {
  const response = await axios.get(`${process.env.API_URL}/design`);
  return response.data;
}

export async function getData() {
  const techData = await getTechData();
  const designData = await getDesignData();
  return { tech: techData, design: designData };
}
