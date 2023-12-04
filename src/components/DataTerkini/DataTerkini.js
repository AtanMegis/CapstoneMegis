import React from 'react';
import './DataTerkini.css';

const DataTerkini = () => {
	return (
		<div>
			<section className="data">
				<div className="container-data">
					<div className="row">
						<div className="title-data">
							<h3 aria-label="Heading Data">
								Presentasi Data Balita Kekurangan gizi
								provinsi Jakarta
							</h3>
							<p>
								Status gizi balita berdasarkan indeks
								BB/U, TB/U, dan BB/TB (%) pada tahun
								2018
							</p>
						</div>
					</div>
					<div className="data-card">
						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									KEPULAUAN SERIBU
								</h4>
								<p className="description">
									BB/U: 1,8% <br /> TB/U: 12,8%{' '}
									<br /> BB/TB: 3,1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA UTARA
								</h4>
								<p className="description">
									BB/U: 0,7% <br /> TB/U: 0,7% <br />{' '}
									BB/TB: 1%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/421884/pexels-photo-421884.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA TIMUR
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 0,3% <br />{' '}
									BB/TB: 0,5%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/159767/baby-cute-moe-brilliant-159767.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA SELATAN
								</h4>
								<p className="description">
									BB/U: 0,2% <br /> TB/U: 0,1% <br />{' '}
									BB/TB: 0,2%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA PUSAT
								</h4>
								<p className="description">
									BB/U: 0,5% <br /> TB/U: 2,4% <br />{' '}
									BB/TB: 0,6%
								</p>
							</div>
						</div>

						<div className="card">
							<div className="avatar">
								<img
									src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</div>
							<div className="content">
								<h4 className="location">
									JAKARTA BARAT
								</h4>
								<p className="description">
									BB/U: 0,6% <br /> TB/U: 0,8% <br />{' '}
									BB/TB: 0,7%
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default DataTerkini;
