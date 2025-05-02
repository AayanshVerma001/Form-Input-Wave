const labels = document.querySelectionAll('.form-control label')

labels.forEach(label => {
    label.innerHTml = label.innerText.split('')
        .map((letter, idx) => '<span style="Transition-delay:${idx*50}ms">${letter}</span>')
        .join('')
})