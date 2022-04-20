export const loadDb = async (callback) => {
	const db = await fetch('db.json');

  const data = await db.json();

  callback(data);
};
