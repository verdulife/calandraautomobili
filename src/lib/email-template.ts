export type FormData = {
  fullname: string;
  phone: string;
  email: string;
  referal: string;
  message: string;
};

export const html = (data: FormData) => `
  <html>
    <head>
      <style>
        html,
        body {
          font-family: sans-serif;
        }
        small {
          font-family: monospace;
          color: gray;
        }
        p {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <h1>New contact ⚡</h1>
      <div>
        <small>NAME</small>
        <p>${data.fullname}</p>
      </div>
      <hr>
      <div>
        <small>PHONE</small>
        <p>${data.phone}</p>
      </div>
      <hr>
      <div>
        <small>EMAIL</small>
        <p>${data.email}</p>
      </div>
      <hr>
      <div>
        <small>REFERAL</small>
        <p>${data.referal}</p>
      </div>
      <hr>
      <div>
        <small>MESSAGE</small>
        <p>${data.message}</p>
      </div>
      <hr>
    <body>
  </html>
`;
