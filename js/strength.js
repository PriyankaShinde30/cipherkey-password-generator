function calculatePasswordStrength(password, options) {
  let score = 0;

  if (password.length >= 8) {
    score += 20;
  }

  if (password.length >= 12) {
    score += 20;
  }

  if (password.length >= 16) {
    score += 20;
  }

  if (options.uppercase) score += 10;
  if (options.lowercase) score += 10;
  if (options.numbers) score += 10;
  if (options.symbols) score += 10;

  if (options.noRepeated) score += 5;

  if (options.avoidSequential) score += 5;

  if (options.excludeSimilar) score += 5;

  if (options.excludeAmbiguous) score += 5;

  let level = "";
  let color = "";
  let width = "";

  score = Math.min(score, 100);

  if (score < 30) {
    level = "Very Weak";
    color = "#ef4444";
    width = 20;
  } else if (score < 50) {
    level = "Weak";
    color = "#f97316";
    width = 40;
  } else if (score < 70) {
    level = "Medium";
    color = "#eab308";
    width = 60;
  } else if (score < 90) {
    level = "Strong";
    color = "#22c55e";
    width = 80;
  } else {
    level = "Very Strong";
    color = "#16a34a";
    width = 100;
  }

  return {
    score,
    level,
    width,
    color,
  };
}
