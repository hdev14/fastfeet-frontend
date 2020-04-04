export default function handleActionOnClick(e) {
  const menu = e.target.nextSibling;
  if (menu && menu.style) {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  }
}
