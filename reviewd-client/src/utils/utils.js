export const getLevel = (ranker) => {
  if (ranker.exp < 100) return "Iron";
  else if (ranker.exp >= 100 && ranker.exp < 400) return "Bronze";
  else if (ranker.exp >= 400 && ranker.exp < 1000) return "Silver";
  else if (ranker.exp >= 1000 && ranker.exp < 2000) return "Gold";
  else if (ranker.exp >= 2000 && ranker.exp < 4000) return "Platinum";
  else if (ranker.exp >= 4000 && ranker.exp < 7000) return "Diamond";
  else if (ranker.exp >= 7000 && ranker.exp < 12000) return "Master";
  else if (ranker.exp >= 12000 && ranker.exp < 20000) return "GrandMaster";
  else if (ranker.exp >= 20000) return "Challenger";
};
