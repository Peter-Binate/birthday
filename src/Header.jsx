import Stack from 'react-bootstrap/Stack';

function Header() {
  return (
    <Stack className='border-bottom border-dark' direction="horizontal" gap={3}>
      <h1 className="p-4 fs-2 text-uppercase">citation et anniversaire</h1>
      <h1 className="p-4 fs-2 ms-auto text-uppercase">mercredi 08 mars 2023</h1>
    </Stack>
  );
}

export default Header;