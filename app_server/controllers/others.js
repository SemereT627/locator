const about = (req,res) => {
    res.render('generic-text', { 
        title: 'About',
        description: "Loc8r was created to help people find places to sit down and get a bit of work done. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias quia error, quo sit beatae obcaecati sunt labore quaerat necessitatibus nesciunt ducimus nemo facere, numquam dicta corrupti repudiandae, quam qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores accusantium iste ipsam placeat amet, veritatis reiciendis reprehenderit obcaecati laudantium et dicta provident illo sunt cupiditate? Repellendus distinctio autem modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eum quis? Eveniet dolore quasi, repellendus officiis dolor non distinctio quo sapiente odio molestias commodi excepturi placeat earum perspiciatis, sequi eum"
});
}

module.exports = {about};