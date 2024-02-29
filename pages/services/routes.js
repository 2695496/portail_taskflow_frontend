const routes = (id_role) => {
  if (id_role === 1) {
    return "/triage";
  }

  switch (id_role) {
    case 1:
      return "/triage";
    case 2:
      return "/infirmier";
    case 3:
      return "/docteur";
    case 4:
      return "/laborantin";
    case 5:
      return "/ressource";
  }
};

export { routes };
