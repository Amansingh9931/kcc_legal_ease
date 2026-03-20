export const calculateRiskScore = (clauses) => {
  let score = {
    high: 0,
    medium: 0,
    low: 0,
  };

  clauses.forEach((c) => {
    if (c.risk === "High") score.high++;
    else if (c.risk === "Medium") score.medium++;
    else score.low++;
  });

  return score;
};