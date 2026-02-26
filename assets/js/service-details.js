const servicesData = {
    'precision-tooling': {
        title: 'Precision Tooling',
        tagline: 'Micron-Level Engineering for Complex Industrial Assets.',
        icon: 'layers',
        overview: 'Our precision tooling division specializes in the design and fabrication of complex molds and dies. Utilizing advanced multi-axis CNC and EDM technology, we deliver assets that ensure flawless production cycles for high-fidelity components.',
        offerings: [
            'Deep-Draw Automotive Dies',
            'Progressive Stamping Tools',
            'High-Speed Machining Components',
            'Micron-Precision Mold Inserts',
            'Tooling Re-engineering Services'
        ],
        features: [
            { icon: 'maximize', title: 'High Accuracy', text: 'Tolerances within 0.1 microns for critical dimensions.' },
            { icon: 'shield', title: 'Extreme Durability', text: 'Advanced heat-treated alloys for extended tool life.' },
            { icon: 'zap', title: 'Rapid Deployment', text: 'Fast-track design-to-part cycles for new launches.' }
        ],
        industries: ['Automotive', 'Aerospace', 'Electronics', 'Medical Devices'],
        standards: 'Exceeding international benchmarks including ISO/TS 16949 and AS9100 Rev D.',
        process: [
            { step: '01', title: 'Design & Simulation', text: 'Advanced UG-NX and I-DEAS simulation to predict metal flow.' },
            { step: '02', title: 'Fabrication', text: 'Robotic CNC milling and wire-cut EDM fabrication.' },
            { step: '03', title: 'Validation', text: 'CMM inspection and trial-run under production loads.' }
        ],
        faqs: [
            { q: 'What is the standard lead time?', a: 'Standard build cycles range from 4 to 12 weeks depending on complexity.' },
            { q: 'Do you offer tool maintenance?', a: 'Yes, we provide quarterly health checks and re-sharpening services.' },
            { q: 'What materials do you work with?', a: 'We specialize in high-grade H13, D2, and specialized tungsten carbides.' }
        ]
    },
    'automotive-systems': {
        title: 'Automotive Systems',
        tagline: 'High-Volume Scalability for Global Vehicle Manufacturers.',
        icon: 'settings',
        overview: 'We are a Tier-1 partner to global automotive brands, providing mass-produced chassis, powertrain, and structural elements. Our automated press lines ensure consistent quality at millions of units per annum.',
        offerings: [
            'Chassis Reinforced Structures',
            'Transmission Gear Housings',
            'Fuel Injection System Components',
            'Body-in-White (BIW) Assemblies',
            'EV Battery Enclosures'
        ],
        features: [
            { icon: 'activity', title: 'Mass Scale', text: 'Capable of delivering 1M+ units monthly per line.' },
            { icon: 'cpu', title: 'Robotic Precision', text: '100% automated welding and assembly bays.' },
            { icon: 'check-circle', title: 'Zero Defect', text: 'Integrated vision systems for real-time inspection.' }
        ],
        industries: ['EV Manufacturing', 'Commercial Vehicles', 'Defense', 'Public Transit'],
        standards: 'Fully compliant with IATF 16949:2016 safety and performance standards.',
        process: [
            { step: '01', title: 'Strategic Sourcing', text: 'Direct procurement of high-tensile automotive grade steel.' },
            { step: '02', title: 'Automated Pressing', text: 'Continuous high-tonnage stamping with robotic transfer.' },
            { step: '03', title: 'Just-in-Time Delivery', text: 'Synchronized logistics with customer assembly schedules.' }
        ],
        faqs: [
            { q: 'Are you EV-ready?', a: 'Yes, we currently supply light-weight structures for 3 global EV brands.' },
            { q: 'What is your annual capacity?', a: 'Our combined units output exceeds 12,000 tons annually.' },
            { q: 'Do you support multi-location staging?', a: 'We have warehouses in 4 major industrial corridors for staging.' }
        ]
    },
    'quality-assurance': {
        title: 'Quality Assurance',
        tagline: 'Zero-Defect Protocols Driven by Data and Metrology.',
        icon: 'shield-check',
        overview: 'Our QA ecosystem operates as an independent audit layer, ensuring every micron of every part meets blueprint specifications. We combine traditional metrology with AI-driven vision systems.',
        offerings: [
            '3D Coordinate Metrology (CMM)',
            'Non-Destructive Testing (NDT)',
            'Surface Finish Profilometry',
            'Metallurgical Composition Analysis',
            'Statistical Process Control (SPC)'
        ],
        features: [
            { icon: 'microscope', title: 'Nano Metrology', text: 'Sub-micron measurement capabilities at scale.' },
            { icon: 'bar-chart', title: 'Predictive Quality', text: 'AI models that predict tool wear before defects occur.' },
            { icon: 'file-text', title: 'Full Traceability', text: 'Digital birth certificates for every critical component.' }
        ],
        industries: ['Nuclear Power', 'Aerospace', 'Medical', 'Industrial Machining'],
        standards: 'ISO/IEC 17025 accredited laboratory facilities.',
        process: [
            { step: '01', title: 'Strict Protocol', text: 'Definition of Critical-to-Quality (CTQ) parameters.' },
            { step: '02', title: 'Live Monitoring', text: 'Automated gauging integrated into the production line.' },
            { step: '03', title: 'Verification', text: 'Final destructive and non-destructive stress tests.' }
        ],
        faqs: [
            { q: 'Can you provide traceability reports?', a: 'Every batch comes with a full material and dimensional trace report.' },
            { q: 'Do you handle third-party audits?', a: 'We facilitate TUV, SGS, and other international audit bodies.' }
        ]
    },
    'iot-manufacturing': {
        title: 'IoT Manufacturing',
        tagline: 'Hyper-Connected Production for Smart Industrial Ecosystems.',
        icon: 'cpu',
        overview: 'Integrating the Industrial Internet of Things (IIoT) into the core production floor, we provide real-time visibility into machine health, cycle times, and energy consumption.',
        offerings: [
            'Predictive Maintenance Arrays',
            'Digital Twin Implementations',
            'Cyber-Physical Press Systems',
            'Smart Sensor Integration',
            'Real-Time OEE Dashboards'
        ],
        features: [
            { icon: 'refresh-cw', title: 'Real-Time Data', text: 'Millisecond-latency feedback from production nodes.' },
            { icon: 'lock', title: 'Secure Edge', text: 'Enterprise-grade cybersecurity for production data.' },
            { icon: 'trending-up', title: 'Optimal OEE', text: 'Maximizing Overall Equipment Effectiveness via data.' }
        ],
        industries: ['Smart Factories', 'Energy Grid', 'Heavy Machinery', 'Global Supply Chain'],
        standards: 'Industry 4.0 compliant communication protocols (OPC-UA/MQTT).',
        process: [
            { step: '01', title: 'Sensor Deployment', text: 'Retrofitting or integrating sensors into critical nodes.' },
            { step: '02', title: 'Edge Processing', text: 'Real-time computation for immediate corrective actions.' },
            { step: '03', title: 'Cloud Analytics', text: 'Long-term trend analysis for strategic yield improvement.' }
        ],
        faqs: [
            { q: 'How secure is the data?', a: 'We use end-to-end encrypted tunnels and local-edge processing.' },
            { q: 'Can I view the data remotely?', a: 'Yes, we provide white-labeled mobile dashboards for stakeholders.' }
        ]
    },
    'global-logistics': {
        title: 'Global Logistics',
        tagline: 'Seamless Supply Chain Solutions Across 4 Continents.',
        icon: 'truck',
        overview: 'We manage the complexity of global movement so you focus on assembly. From custom compliance to multi-modal transit, we ensure parts arrive "Just-in-Time" to your production line.',
        offerings: [
            'Just-in-Time (JIT) Staging',
            'Cross-Border Customs Clearance',
            'Bonded Warehousing Services',
            'Multi-Modal Freight (Sea/Air/Land)',
            'Inventory Buffer Management'
        ],
        features: [
            { icon: 'navigation', title: 'Live Tracking', text: 'Global GPS visibility for every critical shipment.' },
            { icon: 'package', title: 'Inventory Sync', text: 'Direct integration with client ERP systems (SAP/Oracle).' },
            { icon: 'clock', title: 'On-Time: 99.8%', text: 'Market-leading reliability for cross-border transit.' }
        ],
        industries: ['Global Automotive', 'Consumer Goods', 'Infrastructure', 'Oil & Gas'],
        standards: 'C-TPAT and AEO certified supply chain security.',
        process: [
            { step: '01', title: 'Route Optimization', text: 'AI-driven transit planning to minimize lead times.' },
            { step: '02', title: 'Compliance Check', text: 'Pre-clearance documentation for zero border friction.' },
            { step: '03', title: 'Final Mile', text: 'Precision delivery to the specific production bin.' }
        ],
        faqs: [
            { q: 'Which nations do you export to?', a: 'We currently serve 15+ nations including USA, Germany, and Japan.' },
            { q: 'Do you handle DDP shipments?', a: 'Yes, we provide door-to-door Delivered Duty Paid services.' }
        ]
    },
    'rapid-prototyping': {
        title: 'Rapid Prototyping',
        tagline: 'From Conceptual Design to Functional Part in Hours.',
        icon: 'zap',
        overview: 'Our R&D wing operates at the speed of innovation. We bridge the gap between "sketch" and "scale" using additive manufacturing and fast-track metallic carving.',
        offerings: [
            '3D Metal Sintering (DMLS)',
            'Functional Resin Models',
            'Soft-Tooling for Trial Runs',
            'Reverse Engineering (Blue Light Scanning)',
            'FEA Stress Prototyping'
        ],
        features: [
            { icon: 'fast-forward', title: '24-Hour Lead', text: 'Digital-to-resin prints possible within one day.' },
            { icon: 'layers', title: 'Metal Prototypes', text: 'Functional steel and aluminum parts for field testing.' },
            { icon: 'search', title: 'Reverse Engineering', text: 'High-fidelity scan-to-CAD services for legacy parts.' }
        ],
        industries: ['R&D Labs', 'Medical Research', 'Startups', 'Specialty Racing'],
        standards: 'High-fidelity accuracy matching final production specs.',
        process: [
            { step: '01', title: 'CAD Analysis', text: 'Optimizing geometry for functional performance.' },
            { step: '02', title: 'AM/CNC Run', text: 'Selection of optimal prototyping technology.' },
            { step: '03', title: 'Functional Test', text: 'Dimensional and stress validation of the prototype.' }
        ],
        faqs: [
            { q: 'Can prototypes be used for live testing?', a: 'Yes, our functional metal parts are designed for environment testing.' },
            { q: 'What is the cost structure?', a: 'We offer agile hourly or project-based innovation pricing.' }
        ]
    }
};

function loadServiceDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service');
    const data = servicesData[serviceKey];

    if (!data) {
        window.location.href = 'index.html';
        return;
    }

    document.title = `${data.title} | StartupWeb`;
    document.getElementById('service-title').textContent = data.title;
    document.getElementById('service-tagline').textContent = data.tagline;
    document.getElementById('service-overview').innerHTML = `<p>${data.overview}</p>`;

    // Icon
    const iconContainer = document.getElementById('service-icon-container');
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', data.icon);
    icon.classList.add('w-10', 'h-10', 'text-[#ff6b00]');
    iconContainer.appendChild(icon);

    // Offerings
    const offeringsList = document.getElementById('service-offerings');
    data.offerings.forEach(item => {
        const li = document.createElement('li');
        li.className = 'flex items-center gap-4 group';
        li.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#ff6b00] transition-colors">
                <i data-lucide="check" class="w-4 h-4 text-[#ff6b00] group-hover:text-white"></i>
            </div>
            <span class="text-gray-700 font-medium group-hover:text-black transition-colors">${item}</span>
        `;
        offeringsList.appendChild(li);
    });

    // Features
    const featuresGrid = document.getElementById('service-features');
    data.features.forEach(f => {
        const div = document.createElement('div');
        div.className = 'bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 transition-all hover:-translate-y-2 hover:shadow-xl group';
        div.innerHTML = `
            <i data-lucide="${f.icon}" class="w-10 h-10 text-[#ff6b00] mb-6"></i>
            <h4 class="text-lg font-bold uppercase mb-4">${f.title}</h4>
            <p class="text-gray-500 text-sm leading-relaxed">${f.text}</p>
        `;
        featuresGrid.appendChild(div);
    });

    // Industries
    const industryDiv = document.getElementById('service-industries');
    data.industries.forEach(ind => {
        const span = document.createElement('span');
        span.className = 'px-6 py-3 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all cursor-default';
        span.textContent = ind;
        industryDiv.appendChild(span);
    });

    // Process
    const processSteps = document.getElementById('service-process');
    data.process.forEach(p => {
        const div = document.createElement('div');
        div.className = 'flex gap-8 group';
        div.innerHTML = `
            <div class="text-4xl font-black text-gray-100 group-hover:text-orange-100 transition-colors">${p.step}</div>
            <div class="space-y-2">
                <h4 class="text-lg font-bold uppercase">${p.title}</h4>
                <p class="text-gray-500 text-sm leading-relaxed">${p.text}</p>
            </div>
        `;
        processSteps.appendChild(div);
    });

    // FAQs
    const faqContainer = document.getElementById('service-faqs');
    data.faqs.forEach(item => {
        const div = document.createElement('details');
        div.className = 'group bg-white border border-gray-100 rounded-2xl overflow-hidden';
        div.innerHTML = `
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-bold uppercase tracking-widest text-[10px] select-none">
                ${item.q}
                <div class="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400"></i>
                </div>
            </summary>
            <div class="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                ${item.a}
            </div>
        `;
        faqContainer.appendChild(div);
    });

    // Refresh icons
    lucide.createIcons();
}

window.addEventListener('DOMContentLoaded', loadServiceDetails);
