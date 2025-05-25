export default function Portfolio() {
return (
<section className="portfolio">
<h2>My Work</h2>

<div className="project-card">
<h3>Tonic</h3>
<p>A daily selection of privately personalized reads. No accounts or sign-ups required.</p>
<button className="see-project">See Project</button>
</div>

<div className="project-card">
<h3>Multi-Post Stories</h3>
<p>
An experimental content creation feature that allows users to add to an existing story
over the course of a day without spamming friends.
</p>
<button className="see-project">See Project</button>
</div>

<div className="project-card">
<h3>Facebook 360</h3>
<p>
Exploring the future of media in Facebook’s first Virtual Reality app: a place to discover
and enjoy 360 photos and videos.
</p>
<button className="see-project">See Project</button>
</div>

<div className="project-card">
<h3>Uber Navigation</h3>
<p>
A smart assistant to make driving more safe, efficient, and fun by unlocking your
most expensive computer: your car.
</p>
<button className="see-project">See Project</button>
</div>
</section>
);
}