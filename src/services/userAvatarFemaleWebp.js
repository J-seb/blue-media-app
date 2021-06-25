const avatarDefaultFemale =
  "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";
export default avatarDefaultFemale;
