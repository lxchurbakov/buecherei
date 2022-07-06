export const route = (f) => (req, res, next) => {
  try {
    Promise.resolve(f(req, res)).catch((err) => next(err));
  } catch (e) {
    next(e);
  }
};
