function showPage(pageId) {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.classList.add('hidden-page');
    page.classList.remove('active-page');
  });

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden-page');
    targetPage.classList.add('active-page');
  }
}

function showPanel(panelId) { 
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => {
        panel.classList.remove('active-panel');   
    });
    
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) { 
        targetPanel.classList.add('active-panel');
    }
}
