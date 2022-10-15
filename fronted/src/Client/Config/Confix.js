const columns = [
    { id: "company", label: "Company Name", minWidth: 0, align: "left", },
    { id: "company", label: "Company Name", minWidth: 200, align: "left" },
    {
      id: "email",
      label: "Email Address",
      minWidth: 180,
      align: "left",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 180,
      align: "left",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "contact",
      label: "Contact Person",
      minWidth: 180,
      align: "left",
      format: (value) => value.toFixed(2),
    },
  ];

  export default columns