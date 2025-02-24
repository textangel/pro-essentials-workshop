export const run = (message: string) => {
  console.log(message);
};

// Only run this when NOT testing:
if (!process.env.VITEST) {
  run("Hello!");
} 