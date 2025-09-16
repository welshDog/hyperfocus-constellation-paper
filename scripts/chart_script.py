import plotly.graph_objects as go
import plotly.express as px
import json

# Data from the provided JSON
data = [
  {"year": 2020, "paradigm": "Traditional Programming", "adoption": 85, "description": "Manual coding, IDEs, debugging"},
  {"year": 2021, "paradigm": "Low-Code/No-Code", "adoption": 25, "description": "Visual programming, drag-and-drop"},
  {"year": 2022, "paradigm": "AI Coding Assistants", "adoption": 45, "description": "GitHub Copilot, code completion"},
  {"year": 2023, "paradigm": "GPT Coding Era", "adoption": 65, "description": "ChatGPT for programming, code explanation"},
  {"year": 2024, "paradigm": "Advanced AI Coding", "adoption": 78, "description": "Improved LLMs, better code generation"},
  {"year": 2025, "paradigm": "Vibe Coding", "adoption": 35, "description": "Conversational programming, intuitive interfaces"},
  {"year": 2026, "paradigm": "Adaptive AI Coding", "adoption": 60, "description": "Personalized coding environments"},
  {"year": 2027, "paradigm": "Natural Language Programming", "adoption": 75, "description": "English-first programming"},
  {"year": 2028, "paradigm": "Autonomous Code Generation", "adoption": 55, "description": "AI builds entire applications"},
  {"year": 2029, "paradigm": "Self-Evolving Code", "adoption": 40, "description": "Code that improves itself"},
  {"year": 2030, "paradigm": "Neural Programming Interface", "adoption": 25, "description": "Direct brain-computer coding"}
]

# Brand colors - using vibrant colors for better engagement
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', '#B4413C', '#964325', '#944454', '#13343B', '#1FB8CD', '#DB4545']

# Create the timeline chart
fig = go.Figure()

# Add background shading for different eras with labels
fig.add_vrect(x0=2019.5, x1=2022.5, fillcolor="rgba(31, 184, 205, 0.1)", layer="below", line_width=0)
fig.add_vrect(x0=2022.5, x1=2024.5, fillcolor="rgba(219, 69, 69, 0.1)", layer="below", line_width=0) 
fig.add_vrect(x0=2024.5, x1=2030.5, fillcolor="rgba(46, 139, 87, 0.1)", layer="below", line_width=0)

# Add each paradigm as a separate scatter plot
for i, d in enumerate(data):
    # Abbreviate paradigm names to fit 15 character limit
    short_names = {
        "Traditional Programming": "Traditional",
        "Low-Code/No-Code": "Low-Code",
        "AI Coding Assistants": "AI Assistants", 
        "GPT Coding Era": "GPT Era",
        "Advanced AI Coding": "Advanced AI",
        "Vibe Coding": "Vibe Coding",
        "Adaptive AI Coding": "Adaptive AI",
        "Natural Language Programming": "Natural Lang",
        "Autonomous Code Generation": "Autonomous",
        "Self-Evolving Code": "Self-Evolving",
        "Neural Programming Interface": "Neural Interface"
    }
    
    # Determine marker size based on adoption rate (visual hierarchy)
    marker_size = 15 + (d['adoption'] * 0.3)  # Scale size with adoption
    
    fig.add_trace(go.Scatter(
        x=[d['year']],
        y=[d['adoption']],
        mode='markers',
        marker=dict(
            size=marker_size,
            color=colors[i % len(colors)],
            line=dict(width=3, color='white'),
            opacity=0.9,
            symbol='circle'
        ),
        name=short_names[d['paradigm']],
        hovertemplate=f"<b>{d['paradigm']}</b><br>" +
                      f"Year: {d['year']}<br>" +
                      f"Adoption: {d['adoption']}%<br>" +
                      f"{d['description']}<extra></extra>",
        showlegend=True
    ))

# Add connecting line to show temporal progression
fig.add_trace(go.Scatter(
    x=[d['year'] for d in data],
    y=[d['adoption'] for d in data],
    mode='lines',
    line=dict(color='rgba(128,128,128,0.3)', width=2, dash='dot'),
    showlegend=False,
    hoverinfo='skip'
))

# Add era labels as text annotations (within character limits)
fig.add_annotation(x=2021, y=95, text="Traditional Era", showarrow=False, 
                   font=dict(size=12, color='#1FB8CD'), bgcolor="rgba(255,255,255,0.8)")
fig.add_annotation(x=2023.5, y=95, text="AI Rise", showarrow=False,
                   font=dict(size=12, color='#DB4545'), bgcolor="rgba(255,255,255,0.8)")  
fig.add_annotation(x=2027.5, y=95, text="Future Era", showarrow=False,
                   font=dict(size=12, color='#2E8B57'), bgcolor="rgba(255,255,255,0.8)")

# Update layout with more descriptive title
fig.update_layout(
    title="Coding Evolution Timeline 2020-2030",
    xaxis_title="Year", 
    yaxis_title="Adoption %",
    hovermode='closest'
)

# Update axes with better styling
fig.update_xaxes(
    showgrid=True,
    gridwidth=1,
    gridcolor='rgba(128,128,128,0.2)', 
    dtick=1,
    range=[2019.5, 2030.5]
)
fig.update_yaxes(
    showgrid=True,
    gridwidth=1, 
    gridcolor='rgba(128,128,128,0.2)',
    range=[0, 100]
)

# Apply cliponaxis for scatter plot
fig.update_traces(cliponaxis=False)

# Save both PNG and SVG
fig.write_image("chart.png")
fig.write_image("chart.svg", format="svg")

fig.show()