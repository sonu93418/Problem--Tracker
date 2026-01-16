import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.svg';

// SVG Icons
const Icons = {
  Rocket: () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.25-2 5-2 5s3.75-.5 5-2c.625-.625 1-1.5 1-2.5v-5.5m-3 8 3-3"></path>
      <path d="m15 6-6 6"></path>
      <path d="m8 9 3 3"></path>
      <path d="M9 7.5 13.5 3C15.6 1 19 3 19 7v.7c0 1-.5 2-1.3 2.6L13 14H9l-5 5"></path>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  ),
  Edit: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  ),
  Link: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  Plus: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  ),
  Save: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
      <polyline points="17 21 17 13 7 13 7 21"></polyline>
      <polyline points="7 3 7 8 15 8"></polyline>
    </svg>
  ),
  Trash: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  ),
  Clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Repeat: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9"></polyline>
      <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
      <polyline points="7 23 3 19 7 15"></polyline>
      <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    </svg>
  ),
  Calendar: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  Clipboard: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  ),
  RefreshCw: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  ),
  Inbox: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    </svg>
  ),
  Brain: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
};

// Floating Particles Component
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 20,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

// Problem Item Component
const ProblemItem = ({ problem, onDelete, onStatusChange, index }) => {
  const platformColors = {
    LeetCode: '#2C3E50',
    GFG: '#34495E',
    CodeChef: '#2C3E50',
  };

  const statusConfig = {
    pending: { label: 'Pending', icon: <Icons.Clock />, color: '#5A6C7D' },
    done: { label: 'Done', icon: <Icons.Check />, color: '#4A5F73' },
    revise: { label: 'Revise', icon: <Icons.Repeat />, color: '#556B7F' },
  };

  return (
    <motion.div
      className="problem-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, height: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, translateY: -2 }}
    >
      <div className="problem-header">
        <div className="problem-title-section">
          <span 
            className="platform-badge" 
            style={{ background: platformColors[problem.platform] || '#666' }}
          >
            {problem.platform}
          </span>
          <h4 className="problem-title">{problem.name}</h4>
        </div>
        <button
          className="delete-icon"
          onClick={() => onDelete(problem.id)}
          title="Delete"
        >
          <Icons.Trash />
        </button>
      </div>
      
      <div className="problem-footer">
        <div className="problem-meta">
          <span className="problem-date">
            <Icons.Calendar />
            <span>{problem.date}</span>
          </span>
          <select
            className="status-tag"
            value={problem.status}
            onChange={(e) => onStatusChange(problem.id, e.target.value)}
            style={{ background: statusConfig[problem.status].color }}
          >
            <option value="pending">{statusConfig.pending.label}</option>
            <option value="done">{statusConfig.done.label}</option>
            <option value="revise">{statusConfig.revise.label}</option>
          </select>
        </div>
        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="open-link-btn"
        >
          <Icons.ExternalLink />
          <span>Open</span>
        </a>
      </div>
    </motion.div>
  );
};

// Progress Ring Component
const ProgressRing = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-ring">
      <div className="progress-text">{percentage}% Complete</div>
      <div className="progress-bar-container">
        <motion.div 
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

function App() {
  const [problems, setProblems] = useState([]);
  const [questionName, setQuestionName] = useState('');
  const [questionUrl, setQuestionUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [theme, setTheme] = useState('dark');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Load problems from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('problems');
    if (saved) {
      setProblems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('problems', JSON.stringify(problems));
  }, [problems]);

  const addProblem = () => {
    if (!questionName.trim()) {
      alert('Please enter a question name!');
      return;
    }

    const newProblem = {
      id: Date.now(),
      name: questionName,
      url: questionUrl || '#',
      platform: detectPlatform(questionUrl),
      status: 'pending',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };

    setProblems([newProblem, ...problems]);
    setQuestionName('');
    setQuestionUrl('');
  };

  const saveCurrentTab = async () => {
    try {
      const url = window.location.href;
      const title = document.title || 'Untitled';
      
      const newProblem = {
        id: Date.now(),
        name: title,
        url: url,
        platform: detectPlatform(url),
        status: 'pending',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      };

      setProblems([newProblem, ...problems]);
      alert('Current tab saved!');
    } catch (error) {
      alert('Could not save current tab');
    }
  };

  const detectPlatform = (url) => {
    if (url.includes('leetcode')) return 'LeetCode';
    if (url.includes('geeksforgeeks') || url.includes('gfg')) return 'GFG';
    if (url.includes('codechef')) return 'CodeChef';
    return 'Other';
  };

  const deleteProblem = (id) => {
    setProblems(problems.filter(p => p.id !== id));
  };

  const deleteAll = () => {
    if (window.confirm('Are you sure you want to delete all problems?')) {
      setProblems([]);
    }
  };

  const changeStatus = (id, newStatus) => {
    setProblems(problems.map(p => 
      p.id === id ? { ...p, status: newStatus } : p
    ));
  };

  // Filter and sort problems
  const getFilteredProblems = () => {
    let filtered = problems;

    // Search
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.platform.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(p => p.status === filterStatus);
    }

    // Sort
    if (sortBy === 'oldest') {
      filtered = [...filtered].reverse();
    }

    return filtered;
  };

  const filteredProblems = getFilteredProblems();
  const todoProblems = filteredProblems.filter(p => p.status === 'pending');
  const revisionProblems = filteredProblems.filter(p => p.status === 'revise');
  const completedCount = problems.filter(p => p.status === 'done').length;

  return (
    <div className="app">
      <Particles />
      
      <div className="container">
        {/* Header */}
        <motion.header 
          className="header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-left">
            <img src={logo} alt="Problem Tracker" className="header-logo" />
            <div className="header-content">
              <div className="title-section">
                <h1 className="main-title">Problem Tracker</h1>
              </div>
              <p className="subtitle">Track problems • Save links • Revise faster</p>
            </div>
          </div>
          
          <ProgressRing completed={completedCount} total={problems.length} />
        </motion.header>

        {/* Toolbar */}
        <motion.div 
          className="toolbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="search-bar">
            <Icons.Search />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select 
            className="filter-dropdown"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="done">Done</option>
            <option value="revise">Revise</option>
          </select>
          
          <select 
            className="sort-dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
          </motion.button>
        </motion.div>

        {/* Input Section */}

        <motion.div 
          className="input-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="input-row">
            <div className="input-group">
              <span className="input-icon"><Icons.Edit /></span>
              <input
                type="text"
                placeholder="Question Name (e.g., Two Sum)"
                value={questionName}
                onChange={(e) => setQuestionName(e.target.value)}
                className="glass-input"
                onKeyPress={(e) => e.key === 'Enter' && addProblem()}
              />
            </div>
            
            <div className="input-group">
              <span className="input-icon"><Icons.Link /></span>
              <input
                type="text"
                placeholder="Question URL (optional)"
                value={questionUrl}
                onChange={(e) => setQuestionUrl(e.target.value)}
                className="glass-input"
                onKeyPress={(e) => e.key === 'Enter' && addProblem()}
              />
            </div>
          </div>

          <div className="button-column">
            <button
              className="action-btn primary"
              onClick={addProblem}
            >
              <Icons.Plus />
              <span>Add Question</span>
            </button>
            
            <button
              className="action-btn secondary"
              onClick={saveCurrentTab}
            >
              <Icons.Save />
              <span>Save Current Tab</span>
            </button>
            
            <button
              className="action-btn danger"
              onClick={deleteAll}
            >
              <Icons.Trash />
              <span>Delete All</span>
            </button>
          </div>
        </motion.div>

        {/* Dashboard */}
        <div className="dashboard">
          {/* To-Do Panel */}
          <motion.div 
            className="panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="panel-header">
              <h2 className="panel-title"><Icons.Clipboard /> To-Do Problems</h2>
              <span className="panel-badge">{todoProblems.length} items</span>
            </div>
            
            <div className="panel-content">
              {todoProblems.length === 0 ? (
                <motion.div 
                  className="empty-state"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <span className="empty-icon"><Icons.Inbox /></span>
                  <p className="empty-text">Nothing to-do</p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {todoProblems.map((problem, index) => (
                    <ProblemItem
                      key={problem.id}
                      problem={problem}
                      onDelete={deleteProblem}
                      onStatusChange={changeStatus}
                      index={index}
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>

          {/* Revision Panel */}
          <motion.div 
            className="panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="panel-header">
              <h2 className="panel-title"><Icons.RefreshCw /> Revision Problems</h2>
              <span className="panel-badge">{revisionProblems.length} items</span>
            </div>
            
            <div className="panel-content">
              {revisionProblems.length === 0 ? (
                <motion.div 
                  className="empty-state"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <span className="empty-icon"><Icons.Brain /></span>
                  <p className="empty-text">Nothing to revise</p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {revisionProblems.map((problem, index) => (
                    <ProblemItem
                      key={problem.id}
                      problem={problem}
                      onDelete={deleteProblem}
                      onStatusChange={changeStatus}
                      index={index}
                    />
                  ))}
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
